import { createBrowserRouter, RouterProvider } from "react-router";
import Hero from "./components/Hero";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/shows",
        element: <Movies />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
