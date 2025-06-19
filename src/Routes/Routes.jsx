import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root/Root";
import ErrorElement from "../Component/Error/ErrorElement";
import Home from "../Component/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
