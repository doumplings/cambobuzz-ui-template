import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="signup-modal ">
        <img
          src="src/assets/close.svg"
          alt="Close Button"
          className="w-4 absolute cursor-pointer hover:bg-black/10"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h1 id="signup-header">Signup</h1>
        <form action="#">
          <input type="text" placeholder="Name" /> <br />
          <input type="email" placeholder="Email" />
          <br />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <br />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
          />
          <br />
          <label htmlFor="passwork-visible">Show Password</label>
          <input
            id="password-visible"
            type="checkbox"
            onClick={() => setShowPassword(!showPassword)}
          />
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}
