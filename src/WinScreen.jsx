import styles from "./styles/winScreen.module.css";
export default function WinScreen({ setShowStart }) {
  return (
    <div className={styles.winScreen}>
      <div className={styles.winContainer}>
        <h1>You Win!!!</h1>
        <h2>Play Again?</h2>
        <div>
          <button
            className={styles.winButton}
            onClick={() => setShowStart(true)}
            value={true}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
