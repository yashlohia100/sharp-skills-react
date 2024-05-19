import styles from "./ResourcesBox.module.css";
import ResourceItem from "./ResourceItem";
import useCourseContext from "../../../../contexts/useCourseContext";

export default function ResourcesBox() {
  const { duration, articles, resources } = useCourseContext();

  return (
    <div className={styles.resourcesBox}>
      <h2>This course includes</h2>

      <div className={styles.resourcesGrid}>
        <ResourceItem
          icon="play-btn"
          text={`${duration} hours on-demand video`}
        />
        <ResourceItem icon="phone" text="Access on mobile and TV" />
        <ResourceItem icon="file-earmark" text={`${articles} articles`} />
        <ResourceItem icon="badge-cc" text="Closed captions" />
        <ResourceItem
          icon="download"
          text={`${resources} downloadable resources`}
        />
        <ResourceItem icon="trophy" text="Certificate of completion" />
      </div>
    </div>
  );
}
