import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserType, getUserbyEmail } from "../api/user.service";

interface LoginFormProps {
  onSubmitClick: (user: UserType) => void;
}

export default function LoginForm({ onSubmitClick }: LoginFormProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<UserType>();
  const [hasWrongPassword, setHasWrongPassword] = useState(false);

  useEffect(() => {
    getUserbyEmail(email).then((res) => setUser(res));
  }, [email]);

  const handleSubmit = () => {
    if (user?.password !== password) {
      setHasWrongPassword(true);
    } else {
      onSubmitClick(user);
    }
  };

  return (
    <div
      id="login-modal"
      className="md:w-2/5 w-full md:h-auto h-full rounded-none transition-all bg-gradient-to-tr from-teal-800/25 to-cyan-200/50"
    >
      <img
        src="src/assets/close.svg"
        alt="Close Button"
        className="w-4 absolute cursor-pointer z-10 hover:bg-black/10"
        onClick={() => {
          navigate(-1);
        }}
      />
      <h1 className="text-center mb-12 md:mb-0 mt-8 translate-y-6 md:translate-y-0">
        Login
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          id="email"
          className="rounded-md"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          id="password"
          className="rounded-md"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <a
          id="forgot-password"
          href="#"
          className="absolute right-0 mr-4 text-xs hover:underline"
        >
          Forgot Password?
        </a>
        <br />
        <button
          type="submit"
          className="bg-neutral-300 hover:bg-neutral-400 rounded-md w-full mt-2 text-xl font-bold"
          onClick={handleSubmit}
        >
          <Link to="../for-you">Log in</Link>
        </button>
        {hasWrongPassword ? (
          <p className="text-red-400 text-sm">
            Wrong Password, Please Try Again.
          </p>
        ) : null}
        <div className="mt-8">
          <p id="already">
            Don't have an account?{" "}
            <Link
              to="/signup"
              id="create-account"
              className="absolute right-0 mr-4 text-xs hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
