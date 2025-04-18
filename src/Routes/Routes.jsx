import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import PhoneDetails from "../Pages/PhoneDetails";
import Favourites from "../Pages/Favourites";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <span>Loading......</span>,
        loader: () => fetch("../phones.json"),
      },
      {
        path: "phoneDetails/:phoneId",
        loader: () => fetch("../phones.json"),
        hydrateFallbackElement: <span>Loading.....</span>,
        Component: PhoneDetails,
      },
      {
        path: "favorite",
        Component: Favourites,
      },
      { path: "*", Component: ErrorPage },
    ],
  },
]);

export default router;
