import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Onboarding } from "../Onboarding";

import { Home } from "../Home";
import Intro from "../Intro/Intro";

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
