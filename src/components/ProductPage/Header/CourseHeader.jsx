import styles from "./CourseHeader.module.css";
import StarRating from "../../StarRating";
import useCourseContext from "../../../contexts/useCourseContext";
import PriceBox from "./PriceBox";

export default function CourseHeader() {
  const {
    title,
    summary,
    ratingsAverage,
    ratingsQuantity,
    studentsEnrolled,
    label,
    instructor: { name },
  } = useCourseContext();

  return (
    <div className={styles.courseHeader}>
      <div className={styles.gridContainer}>
        <div className={styles.gridLeftContainer}>
          <h1>{title}</h1>
          <p className={styles.subtitle}>{summary}</p>
          <div className={styles.detailBox}>
            <span className={styles.label}>{label}</span>
            <StarRating rating={ratingsAverage} />
            <span>{ratingsQuantity.toLocaleString()} ratings</span>
            <span>{studentsEnrolled.toLocaleString()} students</span>
          </div>
          <p>Instructor: {name}</p>
        </div>

        <div className={styles.gridRightContainer}>
          <PriceBox />
        </div>
      </div>
    </div>
  );
}
