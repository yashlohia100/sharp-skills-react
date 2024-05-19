import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link to="/" className={styles.logo}>
        <i className="bi bi-code-slash"></i>
        <h1>Sharp Skills</h1>
      </Link>

      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <Link>About us</Link>
          <Link>Download apps</Link>
          <Link>Become an instructor</Link>
          <Link>Careers</Link>
          <Link>Contact</Link>
        </div>

        <div className={styles.copyright}>
          <p>©️ {new Date().getFullYear()} by Yash Lohia</p>
        </div>
      </div>
    </div>
  );
}
