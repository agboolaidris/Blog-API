import Image from "next/image";
import React from "react";
import classNames from "classnames";
import { Sub } from "../../helper/types";

interface subProps {
  sub: Sub;
  isSubOwner: boolean;
  refInput: any;
  openInput: any;
  handleUpload: any;
}

const BannerComp: React.FC<subProps> = ({
  sub,
  isSubOwner,
  refInput,
  openInput,
  handleUpload,
}) => {
  return (
    <div className="relative">
      <input type="file" hidden={true} ref={refInput} onChange={handleUpload} />

      <div
        className={classNames("h-20 bg-blue-700 sm:h-32", {
          "cursor-pointer": isSubOwner,
        })}
        onClick={() => openInput("banner")}
      >
        {sub?.bannerUrl && <Image src={sub.bannerUrl} layout="fill" />}
      </div>

      <div className="relative bg-gray-200 ">
        <div className="flex items-center px-3 py-1 sm:h-16 wrapper md:px5">
          {sub?.imageUrl && (
            <div
              className={classNames("absolute  -top-4", {
                "cursor-pointer": isSubOwner,
              })}
              onClick={() => openInput("image")}
            >
              <Image
                src={sub.imageUrl}
                height={50}
                width={50}
                className="overflow-hidden rounded-full -m-9"
              />
            </div>
          )}
          <div className="ml-20">
            <p className="font-bold text-gray-800 text-md sm:text-xl ">
              {sub?.title}
            </p>
            <p className="text-xs text-gray-500">r/{sub?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComp;
