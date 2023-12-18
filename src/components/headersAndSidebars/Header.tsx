import { Link, Outlet } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { LogOutPage } from "../../routes/pages/LogOutPage";

interface Props {
  onSidebarClick: () => void;
  onProfileClick: () => void;
}

export default function Header({ onSidebarClick, onProfileClick }: Props) {
  const { user, isLoggedIn } = useUserContext();

  return (
    <>
      <div className="header border-b bg-blue-50">
        <h1 className="mt-4 md:block hidden">CamboBuzz</h1>
        {user.id === 0 ? (
          <div className="absolute top-4 w-full md:w-24 md:gap-4 md:right-6 grid grid-cols-2 place-items-center gap-56 ">
            <Link to="signup" className=" hover:text-pink-200">
              Signup
            </Link>
            <Link to="login" className=" hover:text-pink-200">
              Login
            </Link>
          </div>
        ) : (
          <>
            <p className="absolute right-7 top-4 hidden md:block">
              {user.name}
            </p>
            <LogOutPage />
          </>
        )}
        <div className="header-links grid grid-cols-2 gap-8 md:mt-4 my-7 text-blue-950 ">
          <Link to="for-you" className="hover:underline active:text-blue-900 ">
            For You
          </Link>
          <Link
            to={!isLoggedIn ? "login" : "following"}
            className="hover:underline active:text-blue-900  "
          >
            Following
          </Link>
        </div>
        <button className="absolute top-4 left-4 md:top-10 md:left-8 cursor-pointer">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/sidebar-4.png"
            alt="sidebar icon"
            onClick={onSidebarClick}
          />
        </button>

        <img
          src="src\assets\Default_pfp.svg.png"
          alt="Profile Pic"
          className="absolute top-4 right-4 md:top-10 md:right-12 cursor-pointer"
          onClick={onProfileClick}
        />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
