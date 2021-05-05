import React, { useEffect } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import Card from "../../components/shared/Card";
import { fetchPost } from "../../Redux/Action/Post";

function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootStateOrAny) => state.Post.posts);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  return (
    <>
      {posts?.map((post: void, index) => (
        <Card post={post} key={index} />
      ))}
    </>
  );
}

export default Feed;
