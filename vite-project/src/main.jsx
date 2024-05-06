import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";
import NewPageDetail from "./pages/NewPageDetail";
import FootballMatch from "./pages/FootballMatch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/news",
    element: <NewPage />,
  },
  {
    path: "/football_match",
    element: <FootballMatch />,
  },
  {
    path: "/news/:id",
    element: <NewPageDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
