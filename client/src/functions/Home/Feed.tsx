import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Card from "../../components/shared/Card";
import { fetchPost } from "../../Redux/Action/Post";

function Feed() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  return (
    <>
      <Card post={null} />
    </>
  );
}

export default Feed;
