import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { UserProvider } from "./context/UserContext";
import { PostsProvider } from "./context/PostsContext";
import { router as BrowserRouter } from "./routes/router";

const router = createBrowserRouter(BrowserRouter);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <PostsProvider>
        <RouterProvider router={router} />
      </PostsProvider>
    </UserProvider>
  </React.StrictMode>
);
