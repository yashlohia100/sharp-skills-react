import useCourseContext from "../../../contexts/useCourseContext";
import styles from "./PriceBox.module.css";

function getDiscountPercent(sellingPrice, price) {
  const discountPercent = ((price - sellingPrice) / price) * 100;
  return discountPercent.toFixed(2);
}

export default function PriceBox() {
  const { thumbnail, sellingPrice, price } = useCourseContext();

  return (
    <div className={styles.priceBox}>
      <div className={styles.imgBox}>
        <img
          src={`${import.meta.env.VITE_BASE_URL}/images/courses/${thumbnail}`}
          alt="course-thumbnail"
        />
      </div>

      <div className={styles.detailBox}>
        <div className={styles.discountBox}>
          <h1>₹{sellingPrice}</h1>
          <p className={`${styles.strike} ${styles.gray}`}>
            ₹{price.toLocaleString()}
          </p>
          <p>{getDiscountPercent(sellingPrice, price)}% off</p>
        </div>

        <p className={styles.red}>5 hours left at this price!</p>

        <button className={styles.buyButton}>Buy this course</button>

        <p className={`${styles.gray} ${styles.center}`}>
          30-Day Money-Back Gurantee
        </p>

        <p className={`${styles.gray} ${styles.center}`}>
          Full Lifetime Access
        </p>
      </div>
    </div>
  );
}
