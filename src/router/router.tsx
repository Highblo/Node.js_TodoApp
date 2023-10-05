import { createBrowserRouter } from "react-router-dom";

import Login from "../components/pages/Login";
import Todo from "../components/pages/Todo";
import ErrorPage from "../components/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/todos",
    element: <Todo />
  },
]);

export default router;