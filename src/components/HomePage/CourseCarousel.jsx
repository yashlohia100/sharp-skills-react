import CourseCard from "./CourseCard";
import styles from "./CourseCarousel.module.css";

export default function CourseCarousel({ heading, coursesData }) {
  return (
    <div className={styles.courseCarousel}>
      <h2>{heading}</h2>

      <div className={styles.courseList}>
        {coursesData.map((courseObj) => (
          <CourseCard key={courseObj.id} courseObj={courseObj} />
        ))}
      </div>
    </div>
  );
}
