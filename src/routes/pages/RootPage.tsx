import { useState } from "react";
import Header from "../../components/headersAndSidebars/Header";
import Sidebar from "../../components/headersAndSidebars/SideBar";
import ProfileDrawer from "../../components/headersAndSidebars/ProfileDrawer";

export default function Root() {
  const [sidebarVisible, setSidebarVisibility] = useState(false);
  const [profileBarVisible, setprofileBarVisibility] = useState(false);

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
      <Sidebar
        isVisible={sidebarVisible}
        onSidebarCloseClick={() => setSidebarVisibility(!sidebarVisible)}
      />
      <ProfileDrawer
        isVisible={profileBarVisible}
        onSidebarCloseClick={() => setprofileBarVisibility(!profileBarVisible)}
      />
    </>
  );
}
