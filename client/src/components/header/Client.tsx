import React from "react";
import { logout } from "../../States/Api/Auth";
import { useAuthDispatch } from "../../States/Context/Auth";

function Client({ setstate }) {
  const dispatch = useAuthDispatch();
  const handleLogout = () => {
    setstate(false);
    logout(dispatch);
  };

  return (
    <>
      <span
        className="p-2 mx-4 mt-5 text-center text-blue-600 border border-blue-600 rounded sm:w-24 hover:text-white hover:bg-blue-600 sm:mt-0 "
        onClick={handleLogout}
      >
        Logout
      </span>
    </>
  );
}

export default Client;
