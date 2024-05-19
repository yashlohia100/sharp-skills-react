import { useEffect, useState } from "react";
import ReviewCard from "../ProductPage/Body/ReviewsBox/ReviewCard";
import styles from "./ReviewsBox.module.css";
import { useLoadingContext } from "../../contexts/LoadingContextProvider";
import { getCurrentUserReviews } from "../../services/apiCourses.mjs";
import { useUserContext } from "../../contexts/UserContextProvider";

export default function ReviewsBox() {
  const { currentlyLoggedInUser } = useUserContext();

  const [currentUserReviews, setCurrentUserReviews] = useState([]);

  const { setIsLoading, setError } = useLoadingContext();

  useEffect(
    function () {
      setIsLoading(true);
      setError("");

      getCurrentUserReviews(currentlyLoggedInUser._id).then((data) => {
        if (data.status === "success") {
          setCurrentUserReviews(data.data.reviews);
        } else {
          setError("Error loading data");
        }

        setIsLoading(false);
      });
    },
    [currentlyLoggedInUser, setIsLoading, setError]
  );

  return (
    <div className={styles.reviewsBox}>
      <h2>Your Reviews</h2>

      <div className={styles.reviewFlex}>
        {currentUserReviews.map((review) => (
          <ReviewCard key={review._id} reviewObj={review} />
        ))}
      </div>
    </div>
  );
}
