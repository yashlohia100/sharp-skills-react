import Accordian from "./Accordian";
import styles from "./SyllabusBox.module.css";

export default function SyllabusBox() {
  return (
    <div className={styles.syllabusBox}>
      <h2>Course Content</h2>
      <Accordian />
    </div>
  );
}
