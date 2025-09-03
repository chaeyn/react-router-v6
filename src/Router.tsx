import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
        // Home페이지에서 에러가 발생한 경우 ErrorComponent 반환
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
      }, // user/을 사용하지 않으면 users/:userId 방식 사용
      // {
      //   path: "users",
      //   element: <UserPage />,
      //   children: [
      //     {
      //       path: ":userId",
      //       element: <User />,
      //     },
      //   ],
      // }
      // /users를 사용하는 경우, /users 안의 페이지가 많은 경우 사용
    ],
    errorElement: <NotFound />,
    // url과 매칭되지 않은 경우 NotFound 반환
  },
]);

export default router;
