import { useState } from "react";
import parse from "html-react-parser";
import styles from "./DescriptionBox.module.css";
import ExpandBtn from "../ExpandBtn/ExpandBtn";
import useCourseContext from "../../../../contexts/useCourseContext";

export default function DescriptionBox() {
  const { description } = useCourseContext();
  const wordLimit = 100;

  const showExpandBtn = description.split("").length > wordLimit;

  const [isExpanded, setIsExpanded] = useState(false);

  function toggleIsExpanded() {
    setIsExpanded((cur) => !cur);
  }

  const splittedText =
    !showExpandBtn || isExpanded
      ? description
      : description.split(" ").slice(0, wordLimit).join(" ") + "...";

  return (
    <div className={styles.descriptionBox}>
      <h2>Description</h2>

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
