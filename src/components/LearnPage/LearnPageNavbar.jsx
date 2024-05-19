import { NavLink } from "react-router-dom";
import styles from "./LearnPageNavbar.module.css";

function LearnPageNavbar() {
  return (
    <div className={styles.links}>
      <NavLink to="overview">Overview</NavLink>
      <NavLink to="qna">QnA</NavLink>
      <NavLink to="review">Review</NavLink>
    </div>
  );
}

export default LearnPageNavbar;
