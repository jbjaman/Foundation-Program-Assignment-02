import { createBrowserRouter, RouterProvider } from "react-router";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Home from "./Pages/Home";
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
        element: <Card />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
