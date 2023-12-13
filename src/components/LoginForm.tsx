import { useNavigate, Link } from "react-router-dom";
import { getUserbyEmailAndPassword } from "../api/user.service";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUserContext } from "../context/UserContext";

interface formData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<formData>();
  const { user, setUser } = useUserContext();

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log(data);
    getUserbyEmailAndPassword(data.email, data.password).then((res) => {
      if (res === undefined) {
        console.log("no user");

        setError("password", {
          type: "manual",
          message: "Your Email or Password is Wrong, Please try again.",
        });
      } else {
        setUser(res);
        navigate("/for-you");
      }
    });
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          id="email"
          className="rounded-md"
          placeholder="Email"
          {...register("email", { required: true, minLength: 8 })}
        />
        <br />
        <input
          type="password"
          id="password"
          className="rounded-md"
          placeholder="Password"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Minimum Length is 8 characters",
            },
          })}
        />
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
        >
          Log In
        </button>
        {errors.password && (
          <p className="text-red-400 text-sm">{errors.password?.message}</p>
        )}
        {user.name !== "" && (
          <p className="bg-green-300/50 rounded-xl text-center mt-4">
            Welcome: {user.name}
          </p>
        )}
      </form>
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
    </div>
  );
}
