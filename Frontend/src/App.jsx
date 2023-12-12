import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { jwtDecode } from "jwt-decode";
import Layout from "./Layout";
import ErrorPage from "./Pages/error/ErrorPage";
import HomePage from "./Pages/home/HomePage";
import AboutPage from "./Pages/about/AboutPage";
import ServicesPage from "./Pages/services/ServicesPage";
import StorePage from "./Pages/store/StorePage";
import Login from "./Pages/login/Login";
import AdminPanel from "./Pages/adminPanel/AdminPanel";
import Default from "./pages/adminPanel/components/Default";
import Crud from "./pages/adminPanel/components/Crud";
import Log from "./pages/adminPanel/components/Log";
import ForgotPassword from "./Pages/forgotPass/ForgotPassword";
import SignUp from "./Pages/signUp/SignUp";
import Checkout from "./Pages/checkout/Checkout";
import UserProfile from "./Pages/userProfile/UserProfile";
import useAuthStore from "./store/authStore";
import Protected from "./Protected";
import { useEffect } from "react";

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  // const login = useAuthStore((state) => state.login);
  // const setRole = useAuthStore((state) => state.setRole);
  // useEffect(() => {
  //   const authStorage = JSON.parse(localStorage.getItem("auth-storage"));
  //   console.log(authStorage);
  //   if (authStorage.state.token) {
  //     const token = authStorage.state.token;
  //     console.log(token);
  //     login(token);
  //     const decodedToken = jwtDecode(token);
  //     console.log(decodedToken);
  //   }
  // }, []);
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
          element: (
            <Protected auth={isAuthenticated}>
              <AdminPanel />
            </Protected>
          ),
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
          path: "/user",
          element: (
            <Protected auth={isAuthenticated}>
              <UserProfile />
            </Protected>
          ),
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
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
