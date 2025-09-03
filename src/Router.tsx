import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";

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
    ],
    errorElement: <NotFound />,
    // url과 매칭되지 않은 경우 NotFound 반환
  },
]);

export default router;
