import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Movies</h1>,
  },
  {
    path: "/movie/:id",
    element: <h1>Movie Information</h1>,
  },
  {
    path: "/actors/:id",
    element: <h1>Actor</h1>,
  },
  {
    path: "/profile/:id",
    element: <h1>Profile</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <CssBaseline />
    </RouterProvider>
  </React.StrictMode>
);
