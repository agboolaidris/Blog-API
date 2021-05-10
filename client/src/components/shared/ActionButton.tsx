import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ActionBution({
  href,
  icon,
  name,
}: {
  href: string;
  icon: any;
  name: string;
}) {
  return (
    <Link href={`${href}`}>
      <div className="flex items-center p-px ml-2 rounded cursor-pointer hover:bg-gray-300">
        <FontAwesomeIcon icon={icon} />
        <span className="ml-1">{name}</span>
      </div>
    </Link>
  );
}

export default ActionBution;
