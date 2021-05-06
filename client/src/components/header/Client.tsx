import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Action/Auth";

function Client({ setstate }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setstate(false);
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
