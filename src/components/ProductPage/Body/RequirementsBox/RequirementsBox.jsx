import useCourseContext from "../../../../contexts/useCourseContext";
import styles from "./RequirementsBox.module.css";

export default function RequirementsBox() {
  const { requirements } = useCourseContext();

  return (
    <div className={styles.requirementsBox}>
      <h2>Requirements</h2>

      <ul className={styles.requirementsList}>
        {requirements.map((requirement) => (
          <li key={requirement}>{requirement}</li>
        ))}
      </ul>
    </div>
  );
}
