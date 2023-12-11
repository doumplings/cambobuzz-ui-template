import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserType, getNewUserId } from "../api/user.service";

interface SignupForm {
  onSubmitClick: (user: UserType) => void;
}

export default function SignupForm({ onSubmitClick }: SignupForm) {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordSame, setIsPasswordSame] = useState<boolean>();
  const navigate = useNavigate();

  useEffect(() => {
    getNewUserId().then((res) => setUserId(res));
  }, []);

  useEffect(() => {
    confirmPassword === ""
      ? setIsPasswordSame(true)
      : password !== confirmPassword
      ? setIsPasswordSame(false)
      : setIsPasswordSame(true);
  }, [password, confirmPassword]);

  const handleSubmit = () => {
    const user: UserType = {
      id: userId,
      name: name,
      email: email,
      password: password,
    };
    if (!isPasswordSame) {
      return;
    } else {
      onSubmitClick(user);
    }
  };

  return (
    <>
      <div className="signup-modal w-full md:w-auto h-screen md:h-auto bg-gradient-to-tr from-teal-700/20 to-cyan-300/50 transition-all">
        <img
          src="src/assets/close.svg"
          alt="Close Button"
          className="w-4 absolute cursor-pointer hover:bg-black/10"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h1 id="signup-header" className="mb-8 md:mb-0">
          Signup
        </h1>
        <form
          className="grid grid-cols-1 place-items-center gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full rounded-xl"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {!isPasswordSame ? (
            <p className="text-red-500 text-left -translate-x-8 text-sm mb-0">
              Passwords must match
            </p>
          ) : null}
          <div className="relative right-24 md:right-10 ">
            <label htmlFor="passwork-visible">Show Password</label>
            <input
              id="password-visible"
              type="checkbox"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-gradient-to-tr from-orange-400/40 to-red-500/50 relative top-6 h-10 md:top-0"
            onClick={handleSubmit}
          >
            <Link to="../for-you">Sign up</Link>
          </button>
        </form>
      </div>
    </>
  );
}
