import { UserType } from "../../api/user.service";
import pfp from "../../assets/pfp.svg";
import edit from "../../assets/pencil.png";
import { useState } from "react";

interface UserInfoProps {
  user: UserType | undefined;
}

export const UserInfo = ({ user }: UserInfoProps) => {
  const [readOnly, setReadOnly] = useState(true);

  return (
    <>
      <form className="bg-violet-50 p-4 rounded shadow" action="#">
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
                  value={user?.name}
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
                  value={user?.email}
                />
                <button
                  className="absolute left-6 top-6"
                  onClick={() => setReadOnly(!readOnly)}
                >
                  <img className="w-4" src={edit} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
