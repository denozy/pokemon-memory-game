import PokemonCard from "./PokemonCard";
import styles from "./styles/pokemonCards.module.css";
export default function PokemonCards({ pokemon, handleClick }) {
  return (
    <div className={styles.gameContainer}>
      <div className={styles.cardContainer}>
        <PokemonCard pokemon={pokemon} handleClick={handleClick} />
      </div>
    </div>
  );
}
