import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <NavLink to="profile">
        <SidebarItem icon="person-fill" text="Profile" />
      </NavLink>

      <NavLink to="purchases">
        <SidebarItem icon="bag-fill" text="Purchases" />
      </NavLink>

      <NavLink to="reviews">
        <SidebarItem icon="star-fill" text="Reviews" />
      </NavLink>
    </div>
  );
}
