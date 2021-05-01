import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Links({ onClick, path, name, style, icon }) {
  return (
    <Link href={path}>
      <a onClick={onClick} className={` ${style}`}>
        <span>{icon && <FontAwesomeIcon icon={icon} />}</span>
        {name}
      </a>
    </Link>
  );
}

export default Links;
