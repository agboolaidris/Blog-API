import React, { useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import Banner from "../../components/Post/banner";
import { Post } from "../../helper/types";

function PostPage() {
  const post: Post = useSelector(
    (state: RootStateOrAny) => state.Post.post.post
  );

  return <>{post && <Banner sub={post.sub} />}</>;
}

export default PostPage;
