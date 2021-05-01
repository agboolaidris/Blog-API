import React from "react";
import { useDispatch } from "react-redux";
import Link from "../shared/Link";
import {
  faHome,
  faShoppingBag,
  faShoppingCart,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
function Client({ setstate }) {
  // const dispatch = useDispatch();
  return (
    <>
      <Link
        name="HOME"
        path="/"
        style="p-3 w-full text-white sm:hidden "
        icon={faHome}
        onClick={() => setstate(false)}
      />
      <Link
        name="PRODUCT"
        path="/product"
        style="p-3 w-full text-white sm:hidden  "
        icon={faShoppingBag}
        onClick={() => setstate(false)}
      />
      <Link
        name="CATEGORY"
        path="/category"
        style="p-3 w-full text-white sm:hidden "
        icon={faListAlt}
        onClick={() => setstate(false)}
      />
      <Link
        name="ORDER"
        path="/order"
        style="p-3 w-full text-white sm:hidden "
        icon={faShoppingCart}
        onClick={() => setstate(false)}
      />
      <span
        className="p-2 mx-4 mt-5 text-center text-white bg-blue-400 rounded-md sm:hidden"
        onClick={() => {
          setstate(false);
        }}
      >
        Logout
      </span>
    </>
  );
}

export default Client;
