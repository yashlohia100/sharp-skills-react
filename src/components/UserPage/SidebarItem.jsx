import styles from "./SidebarItem.module.css";

export default function SidebarItem({ icon, text }) {
  return (
    <div className={styles.sidebarItem}>
      <i className={`bi bi-${icon}`}></i>
      <p>{text}</p>
    </div>
  );
}
