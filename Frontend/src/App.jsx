import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { jwtDecode } from "jwt-decode";
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
import ForgotPassword from "./Pages/ForgotPass/ForgotPassword";
import SignUp from "./Pages/SignUp/SignUp";
import Checkout from "./Pages/checkout/Checkout";
import UserProfile from "./Pages/userProfile/UserProfile";
import useAuthStore from "./store/authStore";
import Protected from "./Protected";
import { useEffect } from "react";

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const login = useAuthStore((state) => state.login);
  const role = useAuthStore((state) => state.role);
  const setRole = useAuthStore((state) => state.setRole);
  const setPersonalInfo = useAuthStore((state) => state.setPersonalInfo);
  const setProductsPurchased = useAuthStore(
    (state) => state.setProductsPurchased
  );
  const setServicesPurchased = useAuthStore(
    (state) => state.setServicesPurchased
  );
  useEffect(() => {
    const authStorage = JSON.parse(localStorage.getItem("auth-storage"));
    if (authStorage.state.token) {
      const token = authStorage.state.token;
      login(token);
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      setRole(decodedToken.role);
      setPersonalInfo(
        decodedToken.name,
        decodedToken.lastname,
        decodedToken.email
      );
      setRole(decodedToken.role ?? "admin");
      setProductsPurchased(decodedToken.products);
      setServicesPurchased(decodedToken.services);
      console.log(role);
    }
  }, [isAuthenticated]);
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
