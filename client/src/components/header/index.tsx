import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../Redux/Action/Auth";
import { useSelector, useDispatch } from "react-redux";
import Guest from "./Guest";
import Client from "./Client";
import classNames from "classnames";

function Nav() {
  const [state, setstate] = useState(false);
  // const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (state) {
      setstate(false);
    } else {
      setstate(true);
    }
  };

  return (
    <header
      className={classNames(
        "bg-blue-600 sticky top-0 z-50 min-h-screen-10  px-8  ",
        {
          "sm:bg-gray-200": false,
          "sm:bg-gray-600": !false,
        }
      )}
    >
      <nav className="flex items-center justify-between min-h-screen-10">
        <div
          className="z-10 text-3xl text-white harmburger sm:hidden"
          onClick={handleClick}
        >
          {!state ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faTimes} />
          )}
        </div>
        <span
          className={classNames("text-white text-2xl ", {
            "sm:text-blue-400 text-3xl font-bold": false,
          })}
        >
          IRIS SHOP
        </span>
        <ul
          className={classNames(
            "fixed sm:relative w-screen sm:w-auto min-h-screen-40  sm:min-h-0 top-10vh sm:top-0 transition duration-1000 left-0  right-0 transform  sm:transform-none translate-x-0 bg-blue-600 sm:bg-transparent flex flex-col sm:flex-row justify-center ",
            { "-translate-x-full": !state }
          )}
        >
          {false ? (
            <>
              <Client setstate={setstate} />
            </>
          ) : (
            <Guest setstate={setstate} />
          )}
        </ul>
        {false && (
          <span
            onClick={() => dispatch(logout())}
            className={classNames("text-white hidden sm:block", {
              "sm:text-blue-500 cursor-pointer": false,
            })}
          >
            Logout
          </span>
        )}
      </nav>
    </header>
  );
}

export default Nav;
