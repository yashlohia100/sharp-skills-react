import styles from "./Error.module.css";

function Error({ children }) {
  return (
    <div className={styles.error}>
      <h1>{children}</h1>
    </div>
  );
}

export default Error;
