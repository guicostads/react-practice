import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Img1 from "./routes/Img1";
import Img2 from "./routes/Img2";
import Img3 from "./routes/Img3";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/image1",
    element: <Img1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/image2",
    element: <Img2 />,
  },
  {
    path: "/image3",
    element: <Img3 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
