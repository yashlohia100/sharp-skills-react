import { useEffect, useState } from "react";
import CoursePurchaseCard from "./CoursePurchaseCard";
import styles from "./PurchasesBox.module.css";
import { useLoadingContext } from "../../contexts/LoadingContextProvider";
import { getCurrentUserPurchases } from "../../services/apiCourses.mjs";
import { useUserContext } from "../../contexts/UserContextProvider";

export default function PurchasesBox() {
  const { currentlyLoggedInUser } = useUserContext();

  const [currentUserPurchases, setCurrentUserPurchases] = useState([]);

  const { setIsLoading, setError } = useLoadingContext();

  useEffect(
    function () {
      setIsLoading(true);
      setError("");

      getCurrentUserPurchases(currentlyLoggedInUser._id).then((data) => {
        if (data.status === "success") {
          setCurrentUserPurchases(data.data.purchases);
        } else {
          setError("Error loading data");
        }

        setIsLoading(false);
      });
    },
    [currentlyLoggedInUser, setIsLoading, setError]
  );

  return (
    <div className={styles.purchasesBox}>
      <h2>Your Purchases</h2>

      <div className={styles.coursesGrid}>
        {currentUserPurchases.map((purchase) => (
          <CoursePurchaseCard
            key={purchase.course.id}
            courseObj={purchase.course}
          />
        ))}
      </div>
    </div>
  );
}
