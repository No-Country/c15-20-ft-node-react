import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./Pages/error/ErrorPage";
import HomePage from "./Pages/home/HomePage";
import AboutPage from "./Pages/about/AboutPage";
import ServicesPage from "./Pages/services/ServicesPage";
import StorePage from "./Pages/store/StorePage";
import Login from "./Pages/Login/Login";
import AdminPanel from "./Pages/adminPanel/AdminPanel";
import Default from "./Pages/adminPanel/components/Default";
import Crud from "./Pages/adminPanel/components/Crud";
import Log from "./Pages/adminPanel/components/Log";
import ForgotPassword from "./Pages/forgotPass/ForgotPassword";
import SignUp from "./Pages/signUp/SignUp";
import Checkout from "./Pages/checkout/Checkout";
import { ChakraProvider } from '@chakra-ui/react';


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
          path: "/checkout",
          element: <Checkout />,
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
          path: "/admin",
          element: <AdminPanel />,
          children: [
            {
              path: "/admin/",
              element: <Default />,
            },
            {
              path: "/admin/crud",
              element: <Crud />,
            },
            {
              path: "/admin/log",
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
  return <ChakraProvider><RouterProvider router={router} /></ChakraProvider>;
}

export default App;
