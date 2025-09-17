import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ListPost from "../pages/ListPost";

const routers = createBrowserRouter([
  {
    path: "/list-post",
    element: <ListPost></ListPost>,
  },
]);