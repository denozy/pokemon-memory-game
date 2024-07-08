import styles from "./styles/pokemonCards.module.css";

export default function PokemonCard({ pokemon, handleClick }) {
  return (
    <>
      {pokemon.map((p) => (
        <button
          className={styles.pokemonCard}
          key={p.id}
          onClick={() => handleClick(p)}
        >
          <div>
            <img
              className={styles.pokemonPicture}
              src={p.sprites.front_default}
              alt={p.name}
              draggable="false"
            />
            <h3 className={styles.pokemonName}>{p.name}</h3>
          </div>
        </button>
      ))}
    </>
  );
}
