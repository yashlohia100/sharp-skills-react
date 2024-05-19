import { useState } from "react";
import styles from "./ProfileBox.module.css";
import { useUserContext } from "../../contexts/UserContextProvider";

export default function ProfileBox() {
  const { currentlyLoggedInUser } = useUserContext();

  const [userName, setUserName] = useState(currentlyLoggedInUser.name);
  const [userEmail, setUserEmail] = useState(currentlyLoggedInUser.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={styles.profileBox}>
      <form className={styles.updateDetailsForm}>
        <h2>Your Account Details</h2>

        <div className={styles.labelInputPair}>
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            spellCheck="false"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className={styles.labelInputPair}>
          <label htmlFor="userEmail">Email</label>
          <input
            type="text"
            id="userEmail"
            name="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>

        <div className={styles.uploadPhotoBox}>
          <img
            src={`${import.meta.env.VITE_BASE_URL}/images/users/${
              currentlyLoggedInUser.photo
            }`}
            alt="user-photo"
          />

          <label htmlFor="userImage">Upload new photo</label>
          <input
            type="file"
            id="userImage"
            name="userImage"
            accept="image/png, image/jpeg"
          />
        </div>

        <button>Save Details</button>
      </form>

      <hr />

      <form className={styles.updateDetailsForm}>
        <h2>Change Password</h2>

        <div className={styles.labelInputPair}>
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>

        <div className={styles.labelInputPair}>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className={styles.labelInputPair}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button>Save Password</button>
      </form>
    </div>
  );
}
