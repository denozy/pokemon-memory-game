import styles from "./styles/winScreen.module.css";
export default function WinScreen({
  setShowStart,
  winOrLose,
  setWinOrLose,
  setClicked,
  setScore,
  setDifficulty,
}) {
  function handleReset() {
    setShowStart(true);
    setWinOrLose(null);
    setClicked([]);
    setScore(0);
    setDifficulty(null);
  }
  return (
    <div className={styles.winScreen}>
      <div className={styles.winContainer}>
        {winOrLose ? <h1>You Win!!!</h1> : <h1>You Lose </h1>}
        <div>
          <button className={styles.winButton} onClick={handleReset}>
            <h2>Play Again?</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
