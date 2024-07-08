import styles from "./styles/loadingScreen.module.css";
export default function LoadingScreen() {
  return (
    <div className={styles.winScreen}>
      <div className={styles.winContainer}>
        <div>
          <h2>Loading...</h2>
        </div>
      </div>
    </div>
  );
}
