import React from "react";
import Header from "../components/Header/index";
function Layout({ children }) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
