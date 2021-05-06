import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { RootStateOrAny, useSelector } from "react-redux";
import Guest from "./Guest";
import Client from "./Client";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import Search from "../shared/Search";

function Nav() {
  const { pathname } = useRouter();
  const notIncludeRoute = ["/signin", "/signup"];
  const routeNotIncluded = notIncludeRoute.includes(pathname);

  const [state, setstate] = useState(false);
  const handleClick = () => {
    if (state) {
      setstate(false);
    } else {
      setstate(true);
    }
  };

  const isAuthenticated = useSelector(
    (state: RootStateOrAny) => state.Auth.isAuthenticated
  );

  return (
    <header
      className={classNames(
        "bg-gray-200 sticky top-0 z-50 min-h-screen-10  px-1"
      )}
    >
      <nav className="relative flex items-center justify-between h-screen-10 ">
        {/* logo */}
        <Link href="/">
          <a>
            <Image src="/reddit.svg" width={120} height={70} />
          </a>
        </Link>

        {!routeNotIncluded && <Search />}

        {/* harmburger */}
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

        {/* navlink */}
        <ul
          className={classNames(
            "fixed sm:relative w-screen sm:w-auto min-h-screen-40  sm:min-h-0 top-10vh sm:top-0 transition duration-1000 left-0  right-0 transform  sm:transform-none translate-x-0 bg-gray-200 sm:bg-transparent flex flex-col sm:flex-row justify-center ",
            { "-translate-x-full": !state }
          )}
        >
          {isAuthenticated ? (
            <>
              <Client setstate={setstate} />
            </>
          ) : (
            <Guest setstate={setstate} />
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
