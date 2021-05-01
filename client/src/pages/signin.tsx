import React from "react";
import Head from "next/head";
import SigninForm from "../functions/Auth/Signin";

function Signin() {
  return (
    <>
      <Head>
        <title>Register page</title>
        <meta name="description" content="this is the home age" />
      </Head>
      <div className="flex items-center justify-center min-h-screen-90">
        <div className="w-full p-4 mx-3 bg-gray-200 rounded-md sm:w-1/2 lg:w-1/3">
          <span className="block text-xl text-center text-blue-600">
            Welcome Back!!!
          </span>
          <span className="block text-center text-pink-600 text-opacity-30">
            Take your business to the next level
          </span>
          <SigninForm />
          {/* <div className="flex justify-between mt-3">
            <Links
              path="/signin"
              name="forget password"
              style="text-blue-600"
            />
            <Links path="/signup" name="register now" style="text-blue-600" /> 
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Signin;
