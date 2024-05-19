import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useUserContext } from "../contexts/UserContextProvider";

export default function Navbar() {
  const { currentlyLoggedInUser, setCurrentlyLoggedInUser } = useUserContext();

  const navigate = useNavigate();

  async function logout() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      credentials: "include",
    });
    const data = await res.json();

    if (data.status === "success") {
      setCurrentlyLoggedInUser(null);
    }

    navigate("/");
  }

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <i className="bi bi-code-slash"></i>
        <h1>Sharp Skills</h1>
      </Link>

      <div className={styles.links}>
        <NavLink to="/courses">Explore</NavLink>
        <NavLink to="/about">About</NavLink>

        <NavLink to="/cart">Cart</NavLink>

        {currentlyLoggedInUser ? (
          <>
            <button onClick={logout}>Log Out</button>
            <Link to="user">
              <img
                src={`${import.meta.env.VITE_BASE_URL}/images/users/${
                  currentlyLoggedInUser.photo
                }`}
                alt="user-photo"
              />
            </Link>
          </>
        ) : (
          <>
            <NavLink to="signup">Sign Up</NavLink>
            <NavLink to="login">Log In</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
