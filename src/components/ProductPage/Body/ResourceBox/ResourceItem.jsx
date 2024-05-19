import styles from "./ResourceItem.module.css";

export default function ResourceItem({ icon, text }) {
  return (
    <div className={styles.resourceItem}>
      <i className={`bi bi-${icon}`}></i>
      <p>{text}</p>
    </div>
  );
}
