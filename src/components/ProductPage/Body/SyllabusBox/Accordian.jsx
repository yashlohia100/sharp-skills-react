import { useState } from "react";
import styles from "./Accordian.module.css";
import ResourceItem from "../ResourceBox/ResourceItem";
import useCourseContext from "../../../../contexts/useCourseContext";

export default function Accordian() {
  const { syllabus } = useCourseContext();

  const [selectedId, setSelectedId] = useState(syllabus[0]?.id || null);

  function handleSelectId(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  return (
    <div className={styles.accordian}>
      {syllabus.map((accordianObj) => (
        <AccordianItem
          key={accordianObj.id}
          accordianObj={accordianObj}
          selectedId={selectedId}
          handleSelectId={handleSelectId}
        />
      ))}
    </div>
  );
}

function AccordianItem({ accordianObj, selectedId, handleSelectId }) {
  const isOpen = accordianObj.id === selectedId;

  return (
    <div className={styles.accordianItem}>
      <div
        className={styles.accordianItemHeader}
        onClick={() => handleSelectId(accordianObj.id)}
      >
        <i className={`bi bi-chevron-${isOpen ? "up" : "down"}`}></i>
        <h3>{accordianObj.sectionTitle}</h3>
      </div>

      {isOpen && (
        <div className={styles.accordianItemBody}>
          {accordianObj.lectures.map((lecture) => (
            <ResourceItem key={lecture} icon="play-btn" text={lecture} />
          ))}
        </div>
      )}
    </div>
  );
}
