import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import { LogOutPage } from "../../routes/LogOutPage";

interface Props {
  onSidebarClick: () => void;
  onProfileClick: () => void;
}

export default function Header({ onSidebarClick, onProfileClick }: Props) {
  const userContext = useContext(UserContext);

  return (
    <>
      <div className="header">
        <h1 className="mt-4">CamboBuzz</h1>
        {userContext?.user.id === 0 ? (
          <div className="login-signup-links">
            <Link to="signup">Signup</Link>
            <Link to="login">Login</Link>
          </div>
        ) : (
          <>
            <p className="absolute right-4 top-4 ">
              Signed in as: {userContext?.user.name}
            </p>
            <LogOutPage />
          </>
        )}
        <div className="header-links">
          <Link to="for-you">For You</Link>
          <Link to="following">Following</Link>
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
