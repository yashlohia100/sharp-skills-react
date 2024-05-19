import styles from "./CourseCard.module.css";
import StarRating from "../StarRating";
import { Link } from "react-router-dom";

function truncate(text) {
  const characterLimit = 54;
  return text.length > characterLimit
    ? text.substring(0, characterLimit) + "..."
    : text;
}

export default function CourseCard({ courseObj }) {
  return (
    <Link to={`/courses/${courseObj._id}`}>
      <div className={styles.courseCard}>
        {/* http://localhost:8000/images/courses/6552e1e3da26fb19ac11a001-thumbnail.jpg */}
        <img
          src={`${import.meta.env.VITE_BASE_URL}/images/courses/${
            courseObj.thumbnail
          }`}
          alt="course-thumbnail"
        />

        <div className={styles.courseCardBody}>
          <h4>{truncate(courseObj.title)}</h4>
          <p>{courseObj.instructor.name}</p>
          <div className={styles.ratingBox}>
            <StarRating rating={courseObj.ratingsAverage} />
            <p>({courseObj.ratingsQuantity.toLocaleString()})</p>
          </div>
          <div className={styles.priceBox}>
            <h3>₹{courseObj.sellingPrice.toLocaleString()}</h3>
            <p>₹{courseObj.price.toLocaleString()}</p>
          </div>
          <span
            className={`${styles.label} ${
              courseObj.label ? "" : styles.hidden
            }`}
          >
            {courseObj.label ? courseObj.label : "X"}
          </span>
        </div>
      </div>
    </Link>
  );
}
