import { useState, useEffect } from "react";

//returns a pokemon object
export default function FetchPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  const url = "https://pokeapi.co/api/v2/pokemon/";
  const firstGenTotal = 151;

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
  //Fisher-Yates(Knuth) shuffle algorithm
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return shuffledArray;
  }

  async function getPokemon(count) {
    const randomIndexes = getRandomIndexArray(count);
    const pokemonArray = [];
    while (randomIndexes.length > 0) {
      try {
        const randomIndex = randomIndexes.pop();
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
    console.log(pokemonArray);
    return pokemonArray;
  }

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getPokemon(5);
      setPokemon(pokemonData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    checkWin();
  }, [clicked]);

  const handleShuffle = () => {
    setPokemon((prevPokemon) => shuffleArray(prevPokemon));
  };

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

  function loseCondition(p) {
    if (clicked.includes(p.id)) {
      console.log("You lose");
    }
  }

  function checkWin() {
    if (clicked.length === pokemon.length) {
      console.log("You win!");
    }
  }

  function handleClick(p) {
    handleShuffle();
    incrementScore(p);
    loseCondition(p);
  }

  return (
    <div>
      {score}
      <div>
        {pokemon.map((p) => (
          <button key={p.id} onClick={() => handleClick(p)}>
            <div>
              <h1>{p.name}</h1>
              <img src={p.sprites.front_default} alt={p.name} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
