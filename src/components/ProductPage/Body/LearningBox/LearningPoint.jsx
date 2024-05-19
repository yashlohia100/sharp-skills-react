import styles from "./LearningPoint.module.css";

export default function LearningPoint({ text }) {
  return (
    <div className={styles.learningPoint}>
      <i className="bi bi-check-lg"></i>
      <p>{text}</p>
    </div>
  );
}
