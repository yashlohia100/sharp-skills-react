import { useState } from "react";
import { useParams } from "react-router-dom";
import { resetPassword } from "../services/apiCourses.mjs";

function ResetPassword({ setCurrentlyLoggedInUser }) {
  const { token } = useParams();

  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!newPassword || !passwordConfirm) return;

    const data = await resetPassword(token, newPassword, passwordConfirm);

    console.log(data);

    setCurrentlyLoggedInUser(data.data.user);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>

        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New password"
        />

        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Password confirm"
        />

        <button>Update Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
