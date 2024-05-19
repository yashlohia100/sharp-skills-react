import useCourseContext from "../../../../contexts/useCourseContext";
import styles from "./CourseForBox.module.css";

export default function CourseForBox() {
  const { courseFor } = useCourseContext();

  return (
    <div className={styles.courseForBox}>
      <h2>Who this course is for</h2>

      <ul className={styles.list}>
        {courseFor.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
