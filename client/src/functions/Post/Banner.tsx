import React, { useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import Banner from "../../components/Post/banner";

function PostPage() {
  const post = useSelector((state: RootStateOrAny) => state.Post.post);

  return <>{post.sub && <Banner sub={post.sub} />}</>;
}

export default PostPage;
