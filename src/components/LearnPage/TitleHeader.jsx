import styles from "./TitleHeader.module.css";

function TitleHeader({ title }) {
  return (
    <div className={styles.titleHeader}>
      <h2>{title}</h2>
    </div>
  );
}

export default TitleHeader;
