import useCourseContext from "../../../../contexts/useCourseContext";
import ReviewCard from "./ReviewCard";
import styles from "./ReviewsBox.module.css";

export default function ReviewsBox() {
  const { reviews } = useCourseContext();

  return (
    <div className={styles.reviewsBox}>
      <h2>Reviews</h2>

      <div className={styles.reviewsGrid}>
        {reviews.map((review) => (
          <ReviewCard key={review._id} reviewObj={review} />
        ))}
      </div>
    </div>
  );
}
