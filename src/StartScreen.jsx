import styles from "./styles/startScreen.module.css";
export default function StartScreen({
  setDifficulty,
  showStart,
  setShowStart,
}) {
  function difficultySelector(e) {
    setDifficulty(e.target.value);
    setShowStart(!showStart);
  }

  return (
    <div className={styles.startModal}>
      <div className={styles.startScreenContainer}>
        <div className={styles.startScreenText}>
          <h1>Difficulty?</h1>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.startButton}
            value={5}
            onClick={difficultySelector}
          >
            Easy
          </button>
          <button
            className={styles.startButton}
            value={8}
            onClick={difficultySelector}
          >
            Medium
          </button>
          <button
            className={styles.startButton}
            value={12}
            onClick={difficultySelector}
          >
            Hard
          </button>
        </div>
      </div>
    </div>
  );
}
