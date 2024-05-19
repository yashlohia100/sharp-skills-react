import { useState } from "react";
import AlertBox from "../components/AlertBox";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/apiCourses.mjs";
import { useUserContext } from "../contexts/UserContextProvider";

export default function Login() {
  const { setCurrentlyLoggedInUser } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  function resetStatus() {
    setStatus("");
  }

  function redirect() {
    // navigate("/courses");
    navigate(-1);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    const data = await login(email, password);

    if (data.status === "success") {
      setStatus("success");
      setTimeout(() => {
        resetStatus();
        redirect();
        setCurrentlyLoggedInUser(data.data.user);
      }, 1500);
    } else {
      setStatus("fail");
      setTimeout(resetStatus, 2000);
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Log in to your account</h2>

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <Link to="/forgotPassword">Forgot password?</Link>

        <button>Log In</button>
      </form>

      {status === "success" && (
        <AlertBox color="green">Logged in successfully</AlertBox>
      )}
      {status === "fail" && (
        <AlertBox color="red">Please check email or password</AlertBox>
      )}
    </div>
  );
}
