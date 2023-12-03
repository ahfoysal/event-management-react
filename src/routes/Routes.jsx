import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Events from "../pages/Events";
import EventDetail from "../pages/EventDetail";
import AboutUs from "../pages/AboutUs";
import Checkout from "../pages/Checkout";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../pages/Services";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
        loader: () => fetch("/hostedEvents.json"),
      },
      {
        index: true,
        path: "/login",
        element: <SignIn />,
      },
      {
        index: true,
        path: "/signup",
        element: <SignUp />,
      },
      {
        index: true,
        path: "/about",
        element: <AboutUs />,
      },
      {
        index: true,
        path: "/events",
        loader: () => fetch("/hostedEvents.json"),
        element: (
          <PrivateRoute>
            <Events />
          </PrivateRoute>
        ),
      },
      {
        index: true,
        path: "/services",
        loader: () => fetch("/events.json"),
        element: (
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        ),
      },
      {
        index: true,
        path: "/event/:id",
        loader: () => fetch("/hostedEvents.json"),
        element: (
          <PrivateRoute>
            <EventDetail />
          </PrivateRoute>
        ),
      },
      {
        index: true,
        path: "/service/:id",
        loader: () => fetch("/events.json"),
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        index: true,
        path: "/checkout/:id",
        loader: () => fetch("/hostedEvents.json"),
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
