import { useState } from "react";
import parse from "html-react-parser";
import styles from "./InstructorBox.module.css";
import ResourceItem from "../ResourceBox/ResourceItem";
import ExpandBtn from "../ExpandBtn/ExpandBtn";
import useCourseContext from "../../../../contexts/useCourseContext";

export default function InstructorBox() {
  const { instructor } = useCourseContext();
  const wordLimit = 50;

  const showExpandBtn = instructor.about.split(" ").length > wordLimit;

  const [isExpanded, setIsExpanded] = useState(false);

  function toggleIsExpanded() {
    setIsExpanded((cur) => !cur);
  }

  const splittedText =
    !showExpandBtn || isExpanded
      ? instructor.about
      : instructor.about.split(" ").slice(0, wordLimit).join(" ") + "...";

  return (
    <div className={styles.instructorBox}>
      <h2>Instructor</h2>
      <h3>{instructor.name}</h3>
      <p className={styles.skills}>{instructor.skills}</p>

      <div className={styles.profileBox}>
        <div className={styles.profileImg}>
          <img
            src={`${import.meta.env.VITE_BASE_URL}/images/users/${
              instructor.photo
            }`}
            alt="profile-img"
          />
        </div>
        {/* <div className={styles.profileDetails}>
          <ResourceItem
            icon="star-fill"
            text={`${instructor.instructorRating} Instructor Rating`}
          />
          <ResourceItem
            icon="trophy-fill"
            text={`${instructor.instructorReviews.toLocaleString()} Reviews`}
          />
          <ResourceItem
            icon="people-fill"
            text={`${instructor.totalStudents.toLocaleString()} Students`}
          />
          <ResourceItem
            icon="play-circle-fill"
            text={`${instructor.numCourses} Courses`}
          />
        </div> */}
      </div>

      <div className="descriptive">{parse(splittedText)}</div>

      {showExpandBtn && (
        <ExpandBtn
          isExpanded={isExpanded}
          toggleIsExpanded={toggleIsExpanded}
        />
      )}
    </div>
  );
}
