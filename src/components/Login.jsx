import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidSignIn, checkValidSignUp } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, SetIsSignIn] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);

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
          console.log(user);
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
          console.log(user);
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
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
          alt="background-img"
        />
      </div>
      <div className="absolute bg-black/80 w-110 m-1 text-white p-12 my-20 mx-auto left-0 right-0 rounded-sm">
        <h1 className="text-3xl font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
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
                placeholder="Full Name"
                className="p-3 m-2 border-1 border-gray-500 rounded-sm placeholder:text-gray-300 bg-black/40"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email or mobile number"
              className="p-3 m-2 border-1 border-gray-500 rounded-sm placeholder:text-gray-300 bg-black/40"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 m-2 border-1 border-gray-500 rounded-sm placeholder:text-gray-300  bg-black/40"
            />
            <p className="text-red-600 font-bold">{errorMessage}</p>
            <button
              className="p-2 m-2 rounded-sm bg-red-700 font-bold"
              onClick={handleButtonClick}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            {isSignIn && (
              <span className="text-center underline cursor-pointer">
                Forgot password?
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
                Remember me
              </label>
            </div>
          )}
          <h1 className="text-gray-400 my-4">
            {isSignIn ? "New to Netflix? " : "Already Registered? "}
            <span
              className="text-white font-bold cursor-pointer"
              onClick={toogleSignInSignUp}
            >
              {isSignIn ? "Sign up now." : "Sign in now"}
            </span>
          </h1>
          <p className="text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
