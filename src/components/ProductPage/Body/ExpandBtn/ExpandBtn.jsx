import styles from "./ExpandBtn.module.css";

export default function ExpandBtn({ isExpanded, toggleIsExpanded }) {
  return (
    <div className={styles.expandBtn} onClick={toggleIsExpanded}>
      <p>{isExpanded ? "Show less" : "Show more"}</p>
      <i className={`bi bi-chevron-${isExpanded ? "up" : "down"}`}></i>
    </div>
  );
}
