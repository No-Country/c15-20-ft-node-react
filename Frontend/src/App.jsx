import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./Pages/error/ErrorPage";
import HomePage from "./Pages/home/HomePage";
import AboutPage from "./Pages/about/AboutPage";
import ServicesPage from "./Pages/services/ServicesPage";
import StorePage from "./Pages/store/StorePage";
import Login from "./Pages/login/Login";
import AdminPanel from "./Pages/adminPanel/AdminPanel";
import Crud from "./Pages/adminPanel/panelComponents/Crud";
import Log from "./Pages/adminPanel/panelComponents/Log";
import ForgotPassword from "./Pages/forgotPass/ForgotPassword";
import SignUp from "./Pages/signUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/services",
          element: <ServicesPage />,
        },
        {
          path: "/store",
          element: <StorePage />,
        },
        {
          path: "/user",
          element: <AdminPanel />,
          children: [
            {
              path: "/user/crud",
              element: <Crud />,
            },
            {
              path: "/user/log",
              element: <Log />,
            },
          ],
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/recover",
          element: <ForgotPassword />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
