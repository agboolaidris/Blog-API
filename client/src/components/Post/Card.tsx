import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Post } from "../../helper/types";
import {
  faBookmark,
  faCommentAlt,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Vote from "../../functions/Home/Vote";
import Image from "next/image";

dayjs.extend(relativeTime);

const Card = ({ post, revalidate }: { post: Post; revalidate?: Function }) => {
  return (
    <div className="flex overflow-hidden border border-gray-200 ">
      {/* vote section */}
      <div className="flex flex-col justify-around px-5 bg-gray-100">
        <Vote
          voteScore={post?.voteScore}
          identifier={post?.identifier}
          slug={post?.slug}
          Uservote={post?.UserVote}
          revalidate={revalidate && revalidate}
        />
      </div>

      {/* post section */}

      <div className="w-full px-2 py-1 text-xs sm:px-3 bg-gray-50">
        {post && (
          <>
            <div className="flex ">
              <Link href={`/r/${post.subName}`}>
                <a className="flex ml-2 text-xs cursor-pointer hover:text-red-600">
                  <Image
                    src={post.sub?.imageUrl}
                    width="20"
                    height="20"
                    className="rounded-full cursor-pointer "
                  />
                  <span className="ml-2 ">{`r/${post.subName}`}</span>
                </a>
              </Link>

              <div className="flex ml-2 text-gray-500">
                <span>Posted-By</span>
                <Link href={`/u/${post.username}`}>
                  <a className="ml-1 hover:text-red-600">{post.username}</a>
                </Link>
              </div>
              <Link href={`${post.url}`}>
                <a className="ml-2 hover:text-red-600 hover:underline">
                  {dayjs(post?.createdAt).fromNow()}
                </a>
              </Link>
            </div>

            <Link href={`${post.url}`}>
              <a className="block mt-3 text-xl text-gray-500 text-opacity-50">
                {post?.title}
              </a>
            </Link>
            {post.body && <p className="text-sm text-gray-500">{post.body}</p>}

            <div className="flex mt-2 text-gray-400">
              <Link href={`${post?.url}`}>
                <div className="flex items-center p-px rounded cursor-pointer hover:bg-gray-300">
                  <FontAwesomeIcon icon={faCommentAlt} />
                  <span className="ml-1">{post?.commentCount} comment</span>
                </div>
              </Link>
              <Link href={`${post?.url}`}>
                <div className="flex items-center p-px ml-2 rounded cursor-pointer hover:bg-gray-300">
                  <FontAwesomeIcon icon={faShare} />
                  <span className="ml-1">Share</span>
                </div>
              </Link>
              <Link href={`${post?.url}`}>
                <div className="flex items-center p-px ml-2 rounded cursor-pointer hover:bg-gray-300">
                  <FontAwesomeIcon icon={faBookmark} />
                  <span className="ml-1">Save</span>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Card;
