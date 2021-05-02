import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { logout } from "../../Redux/Action/Auth";
import { useSelector, useDispatch } from "react-redux";
import Guest from "./Guest";
import Client from "./Client";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

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
        "bg-gray-200 sticky top-0 z-50 min-h-screen-10  px-5"
      )}
    >
      <nav className="flex items-center justify-between min-h-screen-10">
        <div
          className="z-10 text-3xl harmburger sm:hidden"
          onClick={handleClick}
        >
          {!state ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faTimes} />
          )}
        </div>

        <Link href="/">
          <a>
            <Image src="/reddit.svg" width={123} height={70} />
          </a>
        </Link>

        <ul
          className={classNames(
            "fixed sm:relative w-screen sm:w-auto min-h-screen-40  sm:min-h-0 top-10vh sm:top-0 transition duration-1000 left-0  right-0 transform  sm:transform-none translate-x-0 bg-gray-200 sm:bg-transparent flex flex-col sm:flex-row justify-center ",
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
            // onClick={() => dispatch(logout())}
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
