import React from "react";
import Sidebar from "../../components/shared/Sidebar";
import { useSelector, RootStateOrAny } from "react-redux";
import Card from "../../components/Post/Card";
import { Post as PostType } from "../../helper/types";
import Comment from "./Comment";

function Post() {
  const post: PostType = useSelector(
    (state: RootStateOrAny) => state.Post.post.post
  );
  const isAuthenticated = useSelector(
    (state: RootStateOrAny) => state.AuthisAuthenticated
  );

  return (
    <div className="flex wrapper ">
      <div className="mt-2 bg-gray-100 min-h-screen-20">
        {post && <Card post={post} />}
        <Comment />
      </div>
      <div className="hidden mt-2 ml-2 sm:block w-72">
        {post && <Sidebar sub={post.sub} isAuthenticated={isAuthenticated} />}
      </div>
    </div>
  );
}

export default Post;
