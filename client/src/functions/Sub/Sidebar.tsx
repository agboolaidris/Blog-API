import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import SidebarComp from "../../components/Sub/Sidebar";
import { Sub } from "../../helper/types";

function Sidebar() {
  const sub: Sub = useSelector((state: RootStateOrAny) => state.Post.sub.sub);
  const isAuthenticated: boolean = useSelector(
    (state: RootStateOrAny) => state.Auth.isAuthenticated
  );
  return (
    <>
      <SidebarComp sub={sub} isAuthenticated={isAuthenticated} />
    </>
  );
}

export default Sidebar;
