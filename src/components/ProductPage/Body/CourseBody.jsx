import styles from "./CourseBody.module.css";
import CourseForBox from "./CourseForBox/CourseForBox";
import DescriptionBox from "./DescriptionBox/DescriptionBox";
import InstructorBox from "./InstructorBox/InstructorBox";
import LearningBox from "./LearningBox/LearningBox";
import RequirementsBox from "./RequirementsBox/RequirementsBox";
import ResourcesBox from "./ResourceBox/ResourcesBox";
import ReviewsBox from "./ReviewsBox/ReviewsBox";
import SyllabusBox from "./SyllabusBox/SyllabusBox";

export default function CourseBody() {
  return (
    <div className={styles.courseBody}>
      <div className={styles.courseBodyLeftContainer}>
        <LearningBox />
        <ResourcesBox />
        <SyllabusBox />
        <RequirementsBox />
        <CourseForBox />
        <DescriptionBox />
        <InstructorBox />
        <ReviewsBox />
      </div>
      <div></div>
    </div>
  );
}
