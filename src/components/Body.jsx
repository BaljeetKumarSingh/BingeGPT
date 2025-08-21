import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      Component: Login, // element: <Login />
    },
    {
      path: "/browse",
      Component: Browse,
    },
  ]);

  return (
    <div className="bg-black text-white">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
