import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { LoginUser } from "./pages/Login.tsx";
import Layout from "./Layout.tsx";
import { Register } from "./pages/Register.tsx";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [],
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginUser />,
  },
  {
    path: "/register",
    element: <Register/>
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
