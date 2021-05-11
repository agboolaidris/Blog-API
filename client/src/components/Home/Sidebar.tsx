import Image from "next/image";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

function Sidebar({ topSub }) {
  dayjs.extend(relativeTime);
  return (
    <div className="w-full overflow-hidden rounded-t-md">
      <div className="w-full text-center bg-red-500">
        <p className="pt-6 pb-1 text-white">Top Community</p>
      </div>
      <div className="pt-3 pb-2 bg-gray-100">
        {topSub &&
          topSub.map((sub, index) => (
            <div
              className="relative flex items-center pt-1 bg-gray-100 border-b border-gray-500 last:border-0"
              key={index}
            >
              <Link href={`/r/${sub.name}`}>
                <a>
                  <Image
                    src={sub.imageUrl}
                    width={40}
                    height={40}
                    className="overflow-hidden rounded-full cursor-pointer"
                  />
                </a>
              </Link>
              <Link href={`/r/${sub.name}`}>
                <a className="ml-2 text-sm cursor-pointer hover:text-red-500">
                  {sub.name}
                </a>
              </Link>
              <span className="absolute text-xs text-gray-400 right-1">
                {dayjs(sub.createdAt).fromNow()}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
