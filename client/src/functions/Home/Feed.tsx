import React, { useEffect } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import Card from "../../components/Home/Card";
import { fetchPosts } from "../../Redux/Action/Post";

function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootStateOrAny) => state.Post.posts);

  useEffect(() => {
    dispatch(fetchPosts());
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
