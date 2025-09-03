import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Header";
import GptSearch from "./GptSearch";
import Home from "./Home";

const appLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      Component: appLayout,
      children: [
        {
          path: "/",
          Component: Home,
        },
        {
          path: "/login",
          Component: Login,
        },
        {
          path: "/browse",
          Component: Browse,
        },
        {
          path: "/search",
          Component: GptSearch,
        },
     ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
