interface Props {
  onProfileClick: () => void;
  onSignupClick: () => void;
  onLoginClick: () => void;
  onSidebarClick: () => void;
}

export default function Header({
  onProfileClick,
  onLoginClick,
  onSignupClick,
  onSidebarClick,
}: Props) {
  return (
    <>
      <div className="header">
        <h1>CamboBuzz</h1>
        <div className="login-signup-links">
          <a href="#" onClick={onSignupClick}>
            Signup
          </a>
          <a href="#" onClick={onLoginClick}>
            Login
          </a>
        </div>
        <div className="header-links">
          <a href="#">For You</a>
          <a href="#">Following</a>
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
    </>
  );
}
