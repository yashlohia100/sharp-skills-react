import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loaderBox}>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
