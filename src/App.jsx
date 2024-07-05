import { useState, useEffect } from "react";
import FetchPokemon from "./FetchPokemon";
import GameLogic from "./GameLogic";
import PokemonCards from "./PokemonCards";
import Header from "./Header";
import styles from "./styles/app.module.css";
import Footer from "./Footer";
import ScoreContainer from "./ScoreContainer";
import StartScreen from "./StartScreen";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [difficulty, setDifficulty] = useState(5);
  const [showStart, setShowStart] = useState(true);

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
      console.log("You lose");
    }
  }

  function handleClick(p) {
    handleShuffle();
    incrementScore(p);
    loseCondition(p);
  }

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
          <GameLogic pokemon={pokemon} clicked={clicked} />
          <PokemonCards pokemon={pokemon} handleClick={handleClick} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
