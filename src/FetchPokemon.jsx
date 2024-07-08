import { useEffect } from "react";
export default function FetchPokemon({
  pokemon,
  setPokemon,
  difficulty,
  setIsLoading,
  isLoading,
}) {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const firstGenTotal = 151;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const pokemonData = await getPokemon(difficulty);
      setPokemon(pokemonData);

      setIsLoading(false);
    };

    fetchData();
  }, [difficulty]);

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
}
