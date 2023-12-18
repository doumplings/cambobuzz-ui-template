import pfp from "../../assets/pfp.svg";
import edit from "../../assets/pencil.png";
import done from "../../assets/done.svg";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUserContext } from "../../context/UserContext";

type formData = {
  userName: string;
  email: string;
};

export const UserInfo = () => {
  const [readOnly, setReadOnly] = useState(true);
  const { register, handleSubmit } = useForm<formData>();
  const { user, setUser } = useUserContext();

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log(data);
    setUser({ ...user, name: data.userName, email: data.email });
  };

  return (
    <>
      <form
        className="bg-violet-50 p-4 rounded shadow"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-flow-col w-full place-items-center ">
          <input
            className="w-16 col-span-1 translate-x-4 md:translate-x-20"
            type="image"
            src={pfp}
          />
          <div className="col-span-4">
            <div className="grid grid-cols-2 ">
              <div className="grid grid-cols-1 ml-14 gap-2 text-md">
                <label htmlFor="username">Username</label>
                <label htmlFor="username">Email</label>
              </div>
              <div className="grid grid-cols-1 gap-2 ">
                <input
                  className={
                    readOnly
                      ? "w-full rounded px-1 overflow-auto bg-slate-500/50"
                      : "w-full rounded px-1 overflow-auto"
                  }
                  readOnly={readOnly}
                  id="username"
                  type="text"
                  {...register("userName", { value: user.name })}
                />
                <input
                  className={
                    readOnly
                      ? "w-full rounded px-1 overflow-auto bg-slate-500/50"
                      : "w-full rounded px-1 overflow-auto"
                  }
                  readOnly={readOnly}
                  id="email"
                  type="email"
                  {...register("email", { value: user.email })}
                />
                <button
                  className="absolute left-6 top-6"
                  onClick={() => setReadOnly(!readOnly)}
                >
                  <img className="w-4" src={edit} alt="" />
                </button>
                <button className="absolute top-6 right-6" type="submit">
                  <img className="w-4" src={done} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
