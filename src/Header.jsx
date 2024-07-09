import styles from "./styles/header.module.css";
export default function Header({ pokemon, isLoading }) {
  return (
    <div className={styles.headerContainer}>
      <header>
        {!isLoading && (
          <div className={styles.pokemonContainer}>
            <img src={pokemon[0].sprites.front_default} alt="" />
          </div>
        )}
        <h1>Gotta match 'em all!</h1>
        {!isLoading && (
          <div className={styles.pokemonContainer}>
            <img src={pokemon[4].sprites.front_default} alt="" />
          </div>
        )}
      </header>
    </div>
  );
}
