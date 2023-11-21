import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import CreatePost from "../components/CreatePost";

export default function Root() {
  const [sidebarVisible, setSidebarVisibility] = useState(false);

  return (
    <>
      <Header
        onSidebarClick={() => {
          setSidebarVisibility(true);
        }}
      />
      <Sidebar
        isVisible={sidebarVisible}
        onSidebarCloseClick={() => setSidebarVisibility(!sidebarVisible)}
      />
      <CreatePost />
    </>
  );
}
