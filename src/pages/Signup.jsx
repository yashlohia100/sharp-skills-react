import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertBox from "../components/AlertBox";
import { signup } from "../services/apiCourses.mjs";
import { useUserContext } from "../contexts/UserContextProvider";

export default function Signup() {
  const { setCurrentlyLoggedInUser } = useUserContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  function resetStatus() {
    setStatus("");
  }

  function redirect() {
    navigate(-1);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password || !passwordConfirm) {
      return;
    }

    const data = await signup(name, email, password, passwordConfirm);

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
        <h2>Sign up to your account</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

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

        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Confirm password"
        />

        <button>Sign Up</button>
      </form>

      {status === "success" && (
        <AlertBox color="green">Signed up successfully</AlertBox>
      )}
      {status === "fail" && <AlertBox color="red">Signup failed</AlertBox>}
    </div>
  );
}
