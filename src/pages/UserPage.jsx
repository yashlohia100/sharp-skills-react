import { Outlet } from "react-router-dom";
import Sidebar from "../components/UserPage/Sidebar";
import styles from "./UserPage.module.css";

export default function UserPage() {
  return (
    <div className={styles.userPage}>
      <Sidebar />
      <Outlet />
    </div>
  );
}
