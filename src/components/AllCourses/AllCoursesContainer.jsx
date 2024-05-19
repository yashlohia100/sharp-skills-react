import CourseCard from "../HomePage/CourseCard";
import styles from "./AllCoursesContainer.module.css";

export default function AllCoursesContainer({ coursesData }) {
  return (
    <div className={styles.allCoursesContainer}>
      <h1>Explore All Courses</h1>

      <div className={styles.coursesGrid}>
        {coursesData.map((courseObj) => (
          <CourseCard key={courseObj._id} courseObj={courseObj} />
        ))}
      </div>
    </div>
  );
}
