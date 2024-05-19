import { Link } from "react-router-dom";
import styles from "./LoginPrompt.module.css";

function LoginPrompt() {
  return (
    <div>
      <div className={styles.loginPrompt}>
        <h2>Please log in to continue...</h2>
        <div className={styles.buttonDiv}>
          <Link className={styles.linkAsButton} to="/login">
            Login
          </Link>
          <Link className={styles.linkAsButton} to="/signup">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPrompt;
