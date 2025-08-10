import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, userName: displayName })); // this don't update displayName as soon as we sign up
        // b/c at the time we sign up we don't have this displayName b/c profile is updated after the user is created successfuly
        // hence this lead to a bug, to solve this bug we have to update our store as soon as the profile is updated in Login.jsx

        //navigate("/browser"); // we can't do so for that we need to move our router to its parent (i.e. app.jsx)
        // navigate will only work on the child component of router (createBrowserRouter)
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
