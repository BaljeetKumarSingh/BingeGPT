import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { USER_AVATAR } from "../utils/constants";
import logo from "../assets/logo.png";
import search from "../assets/search.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn, SetIsSignIn] = useState(false);

  // subscribing to the redux store
  const userName = useSelector((store) => store?.user?.userName);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, userName: displayName }));
        navigate("/browse");
        SetIsSignIn(true);
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        SetIsSignIn(false);
      }
    });

    // this will unsubscribe to the onAuthStateChange callback when component unmount
    return () => unsubscribe();
  }, []);

  /**
   * bg-gradient-to-b from-black -> gives a gradient of black (from-black) from top to bottom8
   */

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error"); // build an error page
      });
  };
  return (
    <div>
      <div className="absolute z-10 w-screen bg-gradient-to-b from-black px-8, py-1 flex justify-between">
        <img
          className="w-50 cursor-pointer"
          src={logo}
          alt="logo"
          onClick={() => (isSignIn ? navigate("/browse") : navigate("/"))}
        />
        {userName && (
          <div className="flex p-2 gap-2 mr-4">
            <Link to={"/search"}>
              <div className="flex cursor-pointer">
                <img className="w-8 h-8 mt-0.5" src={search} alt="Search" />
                <p className="text-white mt-1.5 mx-1">Search</p>
              </div>
            </Link>
            <div className="flex gap-1">
              <img className="w-10 h-10" src={USER_AVATAR} alt="userLogo" />
              <div className="flex items-center h-10">
                <p className="font-bold text-gray-300">{userName}</p>
              </div>
            </div>
            <button
              className="h-10 p-2 rounded-sm bg-red-600 text-white font-bold"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
