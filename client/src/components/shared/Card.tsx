import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

dayjs.extend(relativeTime);

const Card = ({ post }) => {
  return (
    <div className="flex overflow-hidden border border-gray-200 rounded-md sm:mx-5 min-h-150px hover:border-gray-400">
      {/* vote section */}
      <div className="flex flex-col justify-around px-5 bg-gray-100">
        <span className="font-extrabold text-gray-600 transition-all duration-100 hover:text-red-600">
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
        <span>10</span>
        <span className="font-extrabold text-gray-600 transition-all duration-100 hover:text-blue-600">
          <FontAwesomeIcon icon={faArrowDown} />
        </span>
      </div>

      {/* post section */}

      <div className="w-full px-5 py-2 text-xs bg-gray-50">
        <div className="flex ">
          <Link href={`/r/${post?.subname}`}>
            <>
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/12-people-gesture/avatar.png"
                width="15"
                height="15"
                className="cursor-pointer "
              />

              <a className="ml-2 text-xs cursor-pointer hover:text-red-600">{`r/1234`}</a>
            </>
          </Link>

          <div className="flex ml-2 text-gray-500">
            <span>Posted By</span>
            <Link href={`/u/user`}>
              <a className="ml-1 hover:text-red-600">Idris Agboola</a>
            </Link>
          </div>
          <Link href={`/r/${post?.subName}/${post?.identifier}/${post?.slug}`}>
            <a className="ml-1 hover:text-red-600 hover:underline">
              {dayjs("2018-05-05").fromNow()}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
