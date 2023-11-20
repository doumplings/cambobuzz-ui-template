import { createContext, useState } from "react";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Sidebar from "./components/SideBar";
import SignupForm from "./components/SignUpForm";
import ProfilePage from "./components/ProfilePage";
import ContentPage from "./components/ContentPage";
import CreatePost from "./components/CreatePost";

type User = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export const userContext = createContext<User>({
  name: "",
  username: "",
  email: "",
  password: "",
});

export default function App() {
  const user = {
    name: "Oum Derek",
    username: "doum",
    email: "derekoum17@gmail.com",
    password: "12345678",
  };

  const [sidebarVisible, setSidebarVisibility] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  return (
    <>
      {signupVisible ? (
        <SignupForm />
      ) : loginVisible ? (
        <LoginForm />
      ) : (
        <>
          <Header
            onProfileClick={() => {
              setProfileVisible(!profileVisible);
              setSidebarVisibility(false);
            }}
            onSignupClick={() => setSignupVisible(!signupVisible)}
            onLoginClick={() => setLoginVisible(!loginVisible)}
            onSidebarClick={() => {
              setSidebarVisibility(true);
            }}
          />
          <Sidebar
            isVisible={sidebarVisible}
            onSidebarCloseClick={() => setSidebarVisibility(!sidebarVisible)}
          />
          {profileVisible ? (
            <userContext.Provider value={user}>
              <ProfilePage />
            </userContext.Provider>
          ) : (
            <>
              <CreatePost />
              <ContentPage />
            </>
          )}
        </>
      )}
    </>
  );
}
