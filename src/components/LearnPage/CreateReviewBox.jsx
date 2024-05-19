import { useEffect, useState } from "react";
import styles from "./CreateReviewBox.module.css";
import { useLoadingContext } from "../../contexts/LoadingContextProvider";
import {
  createReview,
  getReviewByCourseIdAndUserId,
} from "../../services/apiCourses.mjs";
import { useParams } from "react-router-dom";

function CreateReviewBox() {
  const { setIsLoading, setError } = useLoadingContext();

  const { id } = useParams();

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [hasReviewed, setHasReviewed] = useState(false);

  useEffect(
    function () {
      setIsLoading(true);
      setError("");

      getReviewByCourseIdAndUserId(id).then((data) => {
        if (data.status === "success") {
          if (data.data.review) {
            setHasReviewed(true);
            setReviewText(data.data.review.reviewText);
            setRating(data.data.review.rating);
          }
        } else {
          setError(data.message);
        }
        setIsLoading(false);
      });
    },
    [id, setIsLoading, setError]
  );

  function handleRating(e) {
    if ((e.target.value > 0 && e.target.value < 6) || e.target.value == "") {
      setRating(e.target.value);
    }
  }

  async function handleCreateReview(e) {
    e.preventDefault();

    if (!reviewText || !rating) return;

    setIsLoading(true);
    setError("");

    const data = await createReview(id, reviewText, rating);
    if (data.status === "success") {
      setHasReviewed(true);
    } else {
      setError(data.message);
    }

    setIsLoading(false);
  }

  return (
    <form onSubmit={handleCreateReview}>
      <h2>{hasReviewed ? "Your review" : "Write your review below"} </h2>
      <textarea
        name="review"
        id="review"
        cols="30"
        rows="10"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        disabled={hasReviewed}
      ></textarea>
      <br />
      <label htmlFor="rating">Rating: </label>
      <input
        type="number"
        min={1}
        max={5}
        value={rating}
        onChange={handleRating}
        disabled={hasReviewed}
      />
      {!hasReviewed && <button>Submit</button>}
    </form>
  );
}

export default CreateReviewBox;
