import { useState } from "react";
import Header from "../components/headers and sidebars/Header";
import Sidebar from "../components/headers and sidebars/SideBar";
import ProfileDrawer from "../components/headers and sidebars/ProfileDrawer";

export default function Root() {
  const [sidebarVisible, setSidebarVisibility] = useState(false);
  const [profileBarVisible, setprofileBarVisibility] = useState(false);

  //Test PR

  return (
    <>
      <Header
        onSidebarClick={() => {
          setSidebarVisibility(true);
          setprofileBarVisibility(false);
        }}
        onProfileClick={() => {
          setprofileBarVisibility(true);
          setSidebarVisibility(false);
        }}
      />
      <Sidebar isVisible={sidebarVisible} onSidebarCloseClick={() => setSidebarVisibility(!sidebarVisible)} />
      <ProfileDrawer isVisible={profileBarVisible} onSidebarCloseClick={() => setprofileBarVisibility(!profileBarVisible)} />
    </>
  );
}
