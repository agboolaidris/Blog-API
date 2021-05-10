import React, { useEffect } from "react";
import useSWR from "swr";

import Card from "../../components/Home/Card";
import { Post } from "../../helper/types";

function Feed() {
  const { data: posts } = useSWR("/post");

  return (
    <>
      {posts?.map((post: void, index) => (
        <Card post={post} key={index} />
      ))}
    </>
  );
}

export default Feed;
