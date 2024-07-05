import { useEffect } from "react";
export default function FetchPokemon({ pokemon, setPokemon, difficulty }) {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const firstGenTotal = 151;

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getPokemon(difficulty);
      setPokemon(pokemonData);
    };

    fetchData();
  }, []);

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
}
