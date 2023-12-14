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
      <div className="header">
        <h1 className="mt-4">CamboBuzz</h1>
        {user.id === 0 ? (
          <div className="absolute top-4 w-full md:w-24 md:gap-4 md:right-6 grid grid-cols-2 place-items-center gap-56 text-pink-50 ">
            <Link to="signup" className=" hover:text-pink-200">
              Signup
            </Link>
            <Link to="login" className=" hover:text-pink-200">
              Login
            </Link>
          </div>
        ) : (
          <>
            <p className="absolute right-4 top-4 ">Signed in as: {user.name}</p>
            <LogOutPage />
          </>
        )}
        <div className="header-links grid grid-cols-2 gap-8 mt-4 text-blue-950 ">
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
        <button id="sidebar-open-btn" className="not-active">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/sidebar-4.png"
            alt="sidebar icon"
            onClick={onSidebarClick}
          />
        </button>

        <img
          id="profile-pic"
          src="src\assets\Default_pfp.svg.png"
          alt="Profile Pic"
          onClick={onProfileClick}
        />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
