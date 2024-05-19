import { useState } from "react";
import StarRating from "../../../StarRating";
import styles from "./ReviewCard.module.css";

export default function ReviewCard({ reviewObj }) {
  const [vote, setVote] = useState(null);

  function toggleUpVote() {
    setVote((cur) => (cur === "up" ? null : "up"));
  }

  function toggleDownVote() {
    setVote((cur) => (cur === "down" ? null : "down"));
  }

  const initials = reviewObj.user.name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div className={styles.userImg}>
          <h4>{initials}</h4>
        </div>
        <div className={styles.userData}>
          <h4>{reviewObj.user.name}</h4>
          <StarRating rating={reviewObj.rating} />
        </div>
      </div>

      <div className={styles.reviewBody}>
        <p>{reviewObj.reviewText}</p>
      </div>

      <div className={styles.helpful}>
        <span>Helpful?</span>
        <i
          className={`bi bi-hand-thumbs-up${vote === "up" ? "-fill" : ""}`}
          onClick={toggleUpVote}
        ></i>
        <i
          className={`bi bi-hand-thumbs-down${vote === "down" ? "-fill" : ""}`}
          onClick={toggleDownVote}
        ></i>
      </div>
    </div>
  );
}
