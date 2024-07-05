import styles from "./styles/header.module.css";
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header>
        <h1>Gotta match 'em all!</h1>
      </header>
    </div>
  );
}
