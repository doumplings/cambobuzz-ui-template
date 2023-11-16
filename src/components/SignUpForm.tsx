import { useState } from "react";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="signup-modal">
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
