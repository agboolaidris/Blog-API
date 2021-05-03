import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

function Search() {
  const [state, setstate] = useState(false);
  // useEffect(() => {
  //   const searchBox = document.querySelector("#searchbox");
  //   if (state) {
  //   }
  // }, []);
  return (
    <div
      className={classNames(" z-50 flex items-center px-4 ", {
        "top-6 h-screen-10 sm:top-0 sm:h-2/3 w-screen sm:w-1/2 fixed inset-x-0  sm:relative": state,
        "relative sm:h-10 ": !state,
      })}
    >
      <label
        htmlFor="search"
        className="absolute px-2 text-2xl text-gray-400 rounded-full"
        onClick={() => (state ? setstate(false) : setstate(true))}
      >
        <FontAwesomeIcon icon={faSearch} />
      </label>

      <input
        className={classNames(
          " bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent",
          {
            "w-full h-full py-1 pr-1 pl-10 ": state,
            "w-0  sm:pl-10 sm:w-auto h-full": !state,
          }
        )}
        id="search"
        onMouseDown={() => setstate(true)}
        onMouseLeave={() => setstate(false)}
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
