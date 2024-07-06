import styles from "./styles/footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer>
        <h3>
          Want more pokemon? Check out{" "}
          <a className={styles.footerLink} href="https://pokeapi.co/">
            PokeApi.co
          </a>
        </h3>
        <div className={styles.nameContainer}>
          <h3>Made by Nick DenBleyker</h3>
        </div>
      </footer>
    </div>
  );
}
