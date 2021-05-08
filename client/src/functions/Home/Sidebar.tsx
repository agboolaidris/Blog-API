import React, { useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import SideBarComp from "../../components/Home/Sidebar";
import { fetchTopSub } from "../../Redux/Action/Post";

function Sidebar() {
  const dispatch = useDispatch();
  const topSub = useSelector((state: RootStateOrAny) => state.Post.topSub);

  useEffect(() => {
    dispatch(fetchTopSub());
  }, [dispatch]);

  return (
    <>
      <SideBarComp topSub={topSub} />
    </>
  );
}

export default Sidebar;
