import Root from "../routes/pages/RootPage";
import SignupPage from "../routes/pages/SignupPage";
import LoginPage from "../routes/pages/LoginPage";
import ContentPage from "../routes/pages/ContentPage";
import ProfilePage from "../components/userProfile/ProfilePage";
import AdminDashboardPage from "../routes/pages/AdminDashboardPage";
import AdminSidebar from "../components/headersAndSidebars/AdminSidebar";
import ErrorPage from "../routes/pages/ErrorPage";
import { MyProfilePage } from "../routes/pages/MyProfilePage";
import { RouteObject } from "react-router-dom";

export const router: RouteObject[] = [
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
];
