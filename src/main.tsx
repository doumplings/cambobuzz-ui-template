import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/RootPage";
import SignupPage from "./routes/SignupPage";
import LoginPage from "./routes/LoginPage";
import ContentPage from "./routes/ContentPage";
import ProfilePage from "./components/userprofile/ProfilePage";
import AdminDashboardPage, {
  loader as userLoader,
} from "./routes/AdminDashboardPage";
import AdminSidebar from "./components/headers and sidebars/AdminSidebar";
import ErrorPage from "./routes/ErrorPage";
import { MyProfilePage } from "./routes/MyProfilePage";
import { UserProvider } from "./utils/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <ContentPage />,
      },
      {
        path: "for-you",
        element: <ContentPage />,
      },
      {
        path: "following",
        element: <ContentPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "admin",
    element: <AdminSidebar />,
    children: [
      {
        path: "dashboard",
        loader: userLoader,
        errorElement: <ErrorPage />,
        element: <AdminDashboardPage />,
      },
      {
        path: "myprofile",
        errorElement: <ErrorPage />,
        element: <MyProfilePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
