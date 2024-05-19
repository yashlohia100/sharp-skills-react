import { useState } from "react";
import styles from "./LearningBox.module.css";
import LearningPoint from "./LearningPoint";
import ExpandBtn from "../ExpandBtn/ExpandBtn";
import useCourseContext from "../../../../contexts/useCourseContext";

export default function LearningBox() {
  const { learningPoints } = useCourseContext();

  const showExpandButton = learningPoints.length > 8;

  const [isExpanded, setIsExpanded] = useState(false);

  function toggleIsExpanded() {
    setIsExpanded((cur) => !cur);
  }

  const learningPointsSliced = isExpanded
    ? learningPoints
    : learningPoints.slice(0, 8);

  return (
    <div className={`${styles.learningBox} p-2`}>
      <h2 className="mb-2">What you will learn</h2>

      <div className={styles.pointsGrid}>
        {learningPointsSliced.map((point) => (
          <LearningPoint key={point} text={point} />
        ))}
      </div>

      {showExpandButton && (
        <ExpandBtn
          isExpanded={isExpanded}
          toggleIsExpanded={toggleIsExpanded}
        />
      )}
    </div>
  );
}
