import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Onboarding } from "../Onboarding";
import { Intro } from "../Intro";
import { Home } from "../Home";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Onboarding />,
      },
      {
        path: "/intro",
        element: <Intro />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
