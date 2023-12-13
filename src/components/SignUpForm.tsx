import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNewUserId, getUserByEmail } from "../api/user.service";
import { useUserContext } from "../context/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";

type formData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupForm() {
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<formData>();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log(data);
    getUserByEmail(data.email).then((fetchedUser) => {
      if (fetchedUser.email === data.email) {
        setError("email", {
          type: "manual",
          message: "You already have an account",
        });
      }
    });
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
    } else {
      getNewUserId().then((newUserId) =>
        setUser({
          id: newUserId,
          name: data.name,
          email: data.email,
          password: data.password,
        })
      );
      navigate("/for-you");
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
        {errors.email && (
          <p className="text-red-500 text-left text-md mb-0">
            {errors.email.message}
          </p>
        )}
        <form
          className="grid grid-cols-1 place-items-center gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl"
            {...register("name", { required: true })}
          />{" "}
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl"
            {...register("email", {
              required: true,
              pattern: {
                value:
                  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                message: "invalid email",
              },
            })}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full rounded-xl"
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "Minimum length is 8 characters",
              },
            })}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full rounded-xl"
            {...register("confirmPassword", { required: true })}
          />
          <div className="w-full -translate-y-3">
            <label htmlFor="passwork-visible">Show Password</label>
            <input
              id="password-visible"
              type="checkbox"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-left -translate-x-8 text-sm mb-0">
              {errors.password
                ? errors.password.message
                : errors.confirmPassword.message}
            </p>
          )}
          <button
            type="submit"
            className="rounded-full bg-gradient-to-tr from-orange-400/40 to-red-500/50 relative top-6 h-10 md:top-0"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
