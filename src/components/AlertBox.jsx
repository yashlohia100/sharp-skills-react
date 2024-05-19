import styles from "./AlertBox.module.css";

export default function AlertBox({ children, color }) {
  return (
    <div className={`${styles.alertBox} ${styles[color]}`}>
      <p>{children}</p>
    </div>
  );
}
