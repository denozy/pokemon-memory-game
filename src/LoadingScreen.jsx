import styles from "./styles/loadingScreen.module.css";

export default function LoadingScreen() {
  return (
    <div className={styles.pokemonLoadingScreen}>
      <div className={styles.ballSpinner} />
      <p>Loading...</p>
    </div>
  );
}
