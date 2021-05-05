import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import {
  faArrowDown,
  faArrowUp,
  faBookmark,
  faCommentAlt,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

dayjs.extend(relativeTime);

const Card = ({ post }) => {
  return (
    <div className="flex mt-3 overflow-hidden border border-gray-200 rounded-md sm:mx-5 hover:border-gray-400">
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

      <div className="w-full px-2 py-1 text-xs sm:px-3 bg-gray-50">
        <div className="flex ">
          <Link href={`/r/${post?.subName}`}>
            <>
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/12-people-gesture/avatar.png"
                width="15"
                height="15"
                className="cursor-pointer "
              />

              <a className="ml-2 text-xs cursor-pointer hover:text-red-600">{`r/${post?.subName}`}</a>
            </>
          </Link>

          <div className="flex ml-2 text-gray-500">
            <span>Posted-By</span>
            <Link href={`/u/user`}>
              <a className="ml-1 hover:text-red-600">{post?.username}</a>
            </Link>
          </div>
          <Link href={`${post?.url}`}>
            <a className="ml-2 hover:text-red-600 hover:underline">
              {dayjs(post?.createdAt).fromNow()}
            </a>
          </Link>
        </div>

        <Link href={post?.url}>
          <a className="block mt-3 text-xl text-gray-500 text-opacity-50">
            {post?.title}
          </a>
        </Link>
        {post.body && <p className="text-sm text-gray-500">{post.body}</p>}

        <div className="flex mt-2 text-gray-400">
          <Link href={post?.url}>
            <div className="flex items-center p-px rounded cursor-pointer hover:bg-gray-300">
              <FontAwesomeIcon icon={faCommentAlt} />
              <span className="ml-1">30k comment</span>
            </div>
          </Link>
          <Link href={post?.url}>
            <div className="flex items-center p-px ml-2 rounded cursor-pointer hover:bg-gray-300">
              <FontAwesomeIcon icon={faShare} />
              <span className="ml-1">Share</span>
            </div>
          </Link>
          <Link href={post?.url}>
            <div className="flex items-center p-px ml-2 rounded cursor-pointer hover:bg-gray-300">
              <FontAwesomeIcon icon={faBookmark} />
              <span className="ml-1">Save</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
