import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import translate from "../assets/translate.png";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/lang";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn, SetIsSignIn] = useState(false);

  // subscribing to the redux store
  const userName = useSelector((store) => store?.user?.userName);
  const langKey = useSelector(store => store.config.lang);

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
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div>
      <div className="absolute z-10 w-screen bg-gradient-to-b from-black px-8, py-1 flex justify-between">
        <img
          className="w-50 cursor-pointer"
          src={logo}
          alt="logo"
          onClick={() => (isSignIn ? navigate("/browse") : navigate("/"))}
        />
        <div className="flex p-2 gap-2 mr-2">
          <div className="flex items-center  h-12">
            <img className="w-5 h-5" src={translate} alt="Language logo" />
            <select className="border-none outline-none text-white h-12 cursor-pointer" onClick={handleLangChange} >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option className="text-black" value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          </div>
          {userName && (
            <div className="flex p-2 gap-2 mr-4">
              <Link to={"/search"}>
                <div className="flex cursor-pointer">
                  <img className="w-8 h-8 mt-0.5" src={search} alt="Search" />
                  <p className="text-white mt-1.5 mx-1">{lang[langKey].search}</p>
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
                {lang[langKey].signOut}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
