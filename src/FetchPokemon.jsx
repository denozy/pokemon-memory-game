import { useState, useEffect } from "react";

//returns a pokemon object
export default function FetchPokemon() {
  const [pokemon, setPokemon] = useState([]);
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

  getPokemon(5);

  // return (
  //   <div>
  //     <button onClick={() => getPokemon}>Generate a random Pokemon</button>
  //     <div>
  //       <h1>{pokemon.name}</h1>
  //       <img src={pokemon.sprites.front_default} alt="" />
  //     </div>
  //   </div>
  // );
}
