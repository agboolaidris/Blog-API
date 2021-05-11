import React from "react";

import SidebarComp from "../../components/shared/Sidebar";
import { Sub } from "../../helper/types";
import { useAuthState } from "../../States/Context/Auth";
import Card from "../../components/Home/Card";

function Feed({ sub }: { sub: Sub }) {
  const { isAuthenticated } = useAuthState();
  return (
    <div className="flex px-3 md:px-5 wrapper ">
      <div className="w-full px-5">
        {sub.posts.map((post, index) => (
          <Card post={post} key={index} />
        ))}
      </div>

      <div className="hidden mt-3 w-72 sm:block min-h-screen-10">
        <SidebarComp sub={sub} isAuthenticated={isAuthenticated} />
      </div>
    </div>
  );
}

export default Feed;
