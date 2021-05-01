import React from "react";
import Head from "next/head";

import SignupForm from "../functions/Auth/Signup";

function Register() {
  return (
    <>
      <Head>
        <title>Register page</title>
        <meta name="description" content="this is the home age" />
      </Head>
      <div className="flex items-center justify-center min-h-screen-90 ">
        <div className="w-full p-4 mx-3 bg-gray-200 rounded-md sm:w-1/2 lg:w-1/3">
          <span className="block text-xl text-center text-blue-600">
            Register as an Admin
          </span>
          <span className="block text-center text-pink-600 text-opacity-30">
            Take your business to the next level
          </span>

          <SignupForm />

          {/* <Links
          path="/signin"
          name="already have an account"
          style="text-blue-600 mt-3"
        /> */}
        </div>
      </div>
    </>
  );
}

export default Register;
