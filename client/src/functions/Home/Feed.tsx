import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPost } from "../../Redux/Action/Post";

function Feed() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  return <div></div>;
}

export default Feed;
