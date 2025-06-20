import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Pomodoro technique </a>
      <a href="">Chronos Pomodor &copy; {new Date().getFullYear()} </a>
    </footer>
  );
}
