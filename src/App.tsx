import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeNav from "./pages/Home";
import DashboardLayout from "./layout/DashboardLayout";
import Layout from "./layout/HomeLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomeNav />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: <HomeNav />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
