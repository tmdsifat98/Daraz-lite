import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      { index: true, Component: Home,
        hydrateFallbackElement:<span>Loading......</span>, loader: () => fetch("phones.json") },

      { path: "*", Component: ErrorPage },
    ],
  },
]);

export default router;
