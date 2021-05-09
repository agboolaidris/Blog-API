import React from "react";
import Sidebar from "../../components/shared/Sidebar";
import { useSelector, RootStateOrAny } from "react-redux";
import Card from "../../components/Post/Card";

function Post() {
  const post = useSelector((state: RootStateOrAny) => state.Post.post);

  return (
    <div className="flex wrapper ">
      <div>{post && <Card post={post} />}</div>
      <div className="hidden mt-2 ml-2 sm:block w-72">
        {post.sub && <Sidebar sub={post.sub} isAuthenticated={true} />}
      </div>
    </div>
  );
}

export default Post;
