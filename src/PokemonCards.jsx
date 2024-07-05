import styles from "./styles/pokemonCards.module.css";
export default function PokemonCards({ pokemon, handleClick }) {
  return (
    <div className={styles.gameContainer}>
      <div className={styles.cardContainer}>
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
              />
              <h3 className={styles.pokemonName}>{p.name}</h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
