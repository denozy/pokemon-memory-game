import styles from "./styles/scoreContainer.module.css";
export default function ScoreContainer({ score, pokemonLength }) {
  return (
    <div className={styles.scoreContainer}>
      <h1>
        Score {score} of {pokemonLength}
      </h1>
    </div>
  );
}
