import About from "./pages/About";
import Donors from "./pages/donors/Donors";
import Home from "./pages/home/Home";
import Signup from "./pages/Signup";
import Documentation from "./pages/Documentation/Documentation";
import DeveloperZone from "./pages/Documentation/DeveloperZone";
import ServiceDetails from "./pages/home/Services/ServiceDetails";
import Login from "./pages/Login";
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/dashboard/Dashboard";
import Otp from "./pages/Otp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Layout/Root";
import PrivateRoutes from "./pages/Layout/PrivateRoutes";
import Error from "./pages/Error";
import EditProfile from "./pages/profile/EditProfile";
import AdminRoutes from "./pages/Layout/AdminRoutes";
import AdminHome from "./pages/AdminDashboard/AdminHome";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        //Admin routes
        {
          path: "/",
          element: <AdminRoutes />,
          children: [
            {
              path: "/admin",
              element: <AdminHome />,
            },
          ],
        },
        // Private Routes
        {
          path: "/",
          element: <PrivateRoutes />,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
            {
              path: "/profile/:username",
              element: <Profile />,
            },
            {
              path: "/profile/setting/:username",
              element: <EditProfile />,
            },
          ],
        },
        // Public Routes
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/donors",
          element: <Donors />,
        },
        {
          path: "/documentation",
          element: <Documentation />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Signup />,
        },
        {
          path: "/confirm/email",
          element: <Otp />,
        },
        {
          path: "/services/:slug",
          element: <ServiceDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
