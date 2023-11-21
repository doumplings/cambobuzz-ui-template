import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  return (
    <div id="login-modal" className="w-2/5">
      <img
        src="src/assets/close.svg"
        alt="Close Button"
        className="w-4 absolute cursor-pointer hover:bg-black/10"
        onClick={() => {
          navigate(-1);
        }}
      />
      <h1 className="text-center">Login</h1>
      <form>
        <input
          type="text"
          id="username"
          className="rounded-md"
          placeholder="Username or Email"
        />
        <br />
        <input
          type="text"
          id="password"
          className="rounded-md"
          placeholder="Password"
        />{" "}
        <br />
        <a id="forgot-password" href="#">
          Forgot Password?
        </a>
        <br />
        <button
          type="submit"
          className="bg-neutral-300 hover:bg-neutral-400 rounded-md"
        >
          Login
        </button>
        <p id="already">
          Don't have an account?{" "}
          <a href="#" id="create-account">
            Create Account
          </a>
        </p>
      </form>
    </div>
  );
}
