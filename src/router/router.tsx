import { createBrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home";
import ErrorPage from "../components/pages/ErrorPage";
import Login from "../components/pages/Login";
import Todo from "../components/pages/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/todos",
    element: <Todo />,
  },
]);

export default router;
