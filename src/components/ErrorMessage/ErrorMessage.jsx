import styles from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <p className={styles.error}>
      Some problem happend... Please, try to use our service a bit later.
      <br />
      <br />
      Thanks for your understanding!
    </p>
  );
}

export default ErrorMessage;
