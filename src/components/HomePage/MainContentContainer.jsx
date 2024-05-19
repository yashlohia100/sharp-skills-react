import styles from "./MainContentContainer.module.css";

export default function MainContentContainer({ children }) {
  return <div className={styles.mainContentContainer}>{children}</div>;
}
