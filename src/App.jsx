import { useState, useEffect, useRef } from "react";

import PokemonCards from "./PokemonCards";
import Header from "./Header";
import styles from "./styles/app.module.css";
import Footer from "./Footer";
import ScoreContainer from "./ScoreContainer";
import StartScreen from "./StartScreen";
import WinScreen from "./WinScreen";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [difficulty, setDifficulty] = useState(null);
  const [showStart, setShowStart] = useState(true);
  const [winOrLose, setWinOrLose] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const originalPokemonRef = useRef([]);

  const url = "https://pokeapi.co/api/v2/pokemon/";
  const firstGenTotal = 151;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const pokemonData = await getPokemon(difficulty);
        setPokemon(pokemonData);
        originalPokemonRef.current = pokemonData;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
      }
    };

    if (!showStart) {
      fetchData();
    }
  }, [showStart]);

  //generates an array of numbers between 1-151, amount based on count.
  function getRandomIndexArray(count) {
    const randomIndexes = [];
    while (randomIndexes.length < count) {
      let num = Math.floor(Math.random() * firstGenTotal) + 1;
      if (!randomIndexes.includes(num)) {
        randomIndexes.push(num);
      }
    }
    return randomIndexes;
  }

  async function getPokemon(count) {
    const randomIndexes = getRandomIndexArray(count);
    const pokemonArray = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = randomIndexes.pop();
      try {
        const response = await fetch(url + randomIndex);
        if (!response.ok) {
          throw new Error("Failed to fetch pokemon");
        }

        const pokemon = await response.json();
        pokemonArray.push(pokemon);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    return pokemonArray;
  }

  useEffect(() => {
    checkWin();
  }, [clicked]);

  function checkWin() {
    if (clicked.length == difficulty) {
      setWinOrLose(true);
    }
  }

  function storeClick(p) {
    if (!clicked.includes(p.id)) {
      setClicked((prevClicked) => [...prevClicked, p.id]);
    }
  }

  function incrementScore(p) {
    if (!clicked.includes(p.id)) {
      setScore((prevScore) => prevScore + 1);
      storeClick(p);
    }
  }

  const handleShuffle = () => {
    setPokemon((prevPokemon) => shuffleArray(prevPokemon));
  };

  //Fisher-Yates(Knuth) shuffle algorithm
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return shuffledArray;
  }

  function loseCondition(p) {
    if (clicked.includes(p.id)) {
      setWinOrLose(false);
    }
  }

  function handleClick(p) {
    handleShuffle();
    incrementScore(p);
    loseCondition(p);
  }

  useEffect(() => {
    if (winOrLose !== null) {
    }
  }, [winOrLose]);

  return (
    <div className={styles.app}>
      {showStart ? (
        <StartScreen
          showStart={showStart}
          setShowStart={setShowStart}
          setDifficulty={setDifficulty}
        />
      ) : (
        <>
          <Header pokemon={originalPokemonRef.current} isLoading={isLoading} />
          <ScoreContainer score={score} pokemonLength={pokemon.length} />
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <PokemonCards pokemon={pokemon} handleClick={handleClick} />
          )}
          <Footer />
        </>
      )}
      {(winOrLose === true || winOrLose === false) && (
        <WinScreen
          winOrLose={winOrLose}
          setWinOrLose={setWinOrLose}
          setShowStart={setShowStart}
          setClicked={setClicked}
          setScore={setScore}
          setDifficulty={setDifficulty}
        />
      )}
    </div>
  );
}

export default App;
