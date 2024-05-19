import { useState } from "react";
import { forgotPassword } from "../services/apiCourses.mjs";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email) return;

    const data = await forgotPassword(email);

    console.log(data);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <button>Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
