export default function LoginForm() {
  return (
    <div id="login-modal">
      <h1>Login to Your Account</h1>
      <form>
        <input type="text" id="username" placeholder="Username or Email" />
        <br />
        <input type="text" id="password" placeholder="Password" /> <br />
        <a id="forgot-password" href="#">
          Forgot Password?
        </a>
        <br />
        <button type="submit">Login</button>
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
