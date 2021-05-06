import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchSubPost } from "../../Redux/Action/Post";
import Card from "../../components/shared/Card";

function Sub() {
  const router = useRouter();
  const sub = router.query.sub;
  const posts = useSelector((state: RootStateOrAny) => state.Post.subPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubPost(sub, router));
  }, [dispatch]);
  return (
    <>
      {posts?.map((post, index) => (
        <Card post={post} key={index} />
      ))}
    </>
  );
}

export default Sub;
