import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisibility] = useState(false);
  const [inputReadOnly, setInputReadOnly] = useState(true);
  const user = {
    name: "Oum Derek",
    username: "doum",
    email: "derekoum17@gmail.com",
    password: "12345678",
  };

  return (
    <div id="profile-page">
      <div id="profile-modal">
        <button id="edit-btn" onClick={() => setInputReadOnly(!inputReadOnly)}>
          <img id="edit-icon" src="src/assets/pencil.png" alt="" />
        </button>
        <input
          id="profile-page-img"
          type="image"
          src="src\assets\Default_pfp.svg.png"
        />
        <br />
        <input
          id="profile-detail-input"
          className={inputReadOnly ? "unmodifiable" : "modifiable"}
          type="text"
          value={user.name}
          readOnly={inputReadOnly}
        />{" "}
        <br />
        <input
          id="profile-detail-input"
          className={inputReadOnly ? "unmodifiable" : "modifiable"}
          type="text"
          value={user.username}
          readOnly={inputReadOnly}
        />{" "}
        <br />
        <input
          id="profile-detail-input"
          className={inputReadOnly ? "unmodifiable" : "modifiable"}
          type="email"
          value={user.email}
          readOnly={inputReadOnly}
        />{" "}
        <br />
        <input
          id="profile-detail-input"
          className={inputReadOnly ? "unmodifiable" : "modifiable"}
          type={passwordVisible ? "text" : "password"}
          value={user.password}
          readOnly={inputReadOnly}
        />
        <br />
        <input
          id="show-password-checkbox"
          type="checkbox"
          onClick={() => setPasswordVisibility(!passwordVisible)}
        />{" "}
        <label id="show-password-label" htmlFor="show-password-checkbox">
          Show Password
        </label>
        <br />
        <button
          id="profile-cancel-button"
          className="profile-btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          {" "}
          Cancel
        </button>
        <button
          id="profile-done-button"
          className="profile-btn"
          onClick={() => setInputReadOnly(true)}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
