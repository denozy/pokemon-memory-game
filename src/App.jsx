import { useState, useEffect } from "react";
import FetchPokemon from "./FetchPokemon";
import GameLogic from "./GameLogic";
import PokemonCards from "./PokemonCards";
import Header from "./Header";
import styles from "./styles/app.module.css";
import Footer from "./Footer";
import ScoreContainer from "./ScoreContainer";
import StartScreen from "./StartScreen";
import WinScreen from "./WinScreen";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [difficulty, setDifficulty] = useState(5);
  const [showStart, setShowStart] = useState(true);
  const [winOrLose, setWinOrLose] = useState(null);

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
    for (let i = array.length - 1; i > 0; i--) {
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
    <div>
      {showStart ? (
        <StartScreen
          showStart={showStart}
          setShowStart={setShowStart}
          setDifficulty={setDifficulty}
        />
      ) : (
        <>
          <Header />
          <ScoreContainer score={score} pokemonLength={pokemon.length} />
          <FetchPokemon
            pokemon={pokemon}
            setPokemon={setPokemon}
            difficulty={difficulty}
          />
          <GameLogic
            pokemon={pokemon}
            clicked={clicked}
            setWinOrLose={setWinOrLose}
            difficulty={difficulty}
          />
          <PokemonCards pokemon={pokemon} handleClick={handleClick} />
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
        />
      )}
    </div>
  );
}

export default App;
