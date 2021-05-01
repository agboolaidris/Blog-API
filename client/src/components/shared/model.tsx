import React, { useEffect } from "react";
import classNames from "classnames";

function Modal({ hidden, children }) {
  useEffect(() => {
    const modal = document.querySelector("#modal");
    if (hidden) {
      modal.classList.add("-translate-y-full");
      setTimeout(() => {
        modal.classList.add("opacity-0");
        modal.classList.add("scale-150");
      }, 150);
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 200);
    } else {
      modal.classList.remove("hidden");
      setTimeout(() => {
        modal.classList.remove("-translate-y-full");
        modal.classList.remove("opacity-0");
        modal.classList.remove("scale-150");
      }, 200);
    }
  }, [hidden]);

  return (
    <div
      id="modal"
      className={classNames(
        "w-full h-full bg-gray-400 px-5 fixed z-50 inset-0 -translate-x-1/2 flex justify-center items-center transition-all duration-1000 "
      )}
    >
      {children}
    </div>
  );
}

export default Modal;
