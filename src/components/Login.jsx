import { useRef, useState } from "react";
import { checkValidSignIn, checkValidSignUp } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants";
import lang from "../utils/lang";

const Login = () => {
  const [isSignIn, SetIsSignIn] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toogleSignInSignUp = () => {
    SetIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = isSignIn
      ? checkValidSignIn(email.current.value, password.current.value)
      : checkValidSignUp(
          name.current.value,
          email.current.value,
          password.current.value
        );
    SetErrorMessage(message);

    if (message) return; // if message is not null return

    if (!isSignIn) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser; // provide currently signed-in/up user
              dispatch(
                addUser({ uid: uid, email: email, userName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              SetErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="absolute">
        <img className="w-screen h-screen" src={BG_IMG} alt="background-img" />
      </div>
      <div className="absolute w-screen h-screen bg-black/50 text-xs md:text-sm lg:text-base">
        <div className="absolute bg-black/70 text-white w-xs sm:w-md p-12 my-20 mx-auto left-0 right-0 rounded-sm">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {isSignIn ? (lang[langKey].signIn) : (lang[langKey].signUp)} 
          </h1>
          <div className="">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4 justify-center"
            >
              {!isSignIn && (
                <input
                  ref={name}
                  type="text"
                  placeholder={lang[langKey].fullName}
                  className="p-3 m-2 border-1 border-gray-500 rounded-sm placeholder:text-gray-300 bg-black/40"
                />
              )}
              {isSignIn && (
                <input
                  ref={email}
                  type="text"
                  defaultValue="test@demo.com"
                  placeholder={lang[langKey].emailOrMobile}
                  className="p-3 m-2 border-1 border-gray-500 rounded-sm placeholder:text-gray-300 bg-black/40"
                />
              )}
              {isSignIn && (
                <input
                  ref={password}
                  type="password"
                  defaultValue="Test@123"
                  placeholder={lang[langKey].password}
                  className="p-3 m-2 border-1 border-gray-500 rounded-sm placeholder:text-gray-300  bg-black/40"
                />
              )}
              {!isSignIn && (
                <input
                  ref={email}
                  type="text"
                  placeholder={lang[langKey].emailOrMobile}
                  className="p-3 m-2 border-1 border-gray-500 rounded-sm placeholder:text-gray-300 bg-black/40"
                />
              )}
              {!isSignIn && (
                <input
                  ref={password}
                  type="password"
                  placeholder={lang[langKey].password}
                  className="p-3 m-2 border-1 border-gray-500 rounded-sm placeholder:text-gray-300  bg-black/40"
                />
              )}
              <p className="text-red-600 font-bold">{errorMessage}</p>
              <button
                className="p-2 m-2 rounded-sm bg-red-700 font-bold cursor-pointer"
                onClick={handleButtonClick}
              >
                {isSignIn ? (lang[langKey].signIn) : (lang[langKey].signUp)}
              </button>
              {isSignIn && (
                <span className="text-center underline cursor-pointer">
                  {lang[langKey].forgotPassword}
                </span>
              )}
            </form>
          </div>
          <div className="mt-4">
            {isSignIn && (
              <div>
                <input
                  className=""
                  type="checkbox"
                  name="Remember me"
                  id="Remember me"
                />
                <label className="px-2" htmlFor="Remember me">
                  {lang[langKey].rememberMe}
                </label>
              </div>
            )}
            <h1 className="text-gray-400 my-4">
              {isSignIn ? (lang[langKey].newToNetflix) : (lang[langKey].alreadyRegistered)}
              <span
                className="text-white font-bold cursor-pointer"
                onClick={toogleSignInSignUp}
              >
                {isSignIn ? (lang[langKey].signUpNow) : (lang[langKey].signInNow)}
              </span>
            </h1>
            <p className="text-gray-400">
              {lang[langKey].captcha}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
