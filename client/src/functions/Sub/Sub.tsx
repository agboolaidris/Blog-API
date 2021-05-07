import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchSubPost } from "../../Redux/Action/Post";
import Card from "../../components/shared/Card";
import { Sub as SubType } from "../../helper/types";

function Sub() {
  const router = useRouter();

  //local state
  const sub = router.query.sub;

  //global state
  const subName: SubType = useSelector(
    (state: RootStateOrAny) => state.Post.sub.sub
  );

  const dispatch = useDispatch();

  // functions
  useEffect(() => {
    dispatch(fetchSubPost(sub, router));
  }, [dispatch]);

  return (
    <>
      {subName?.posts.map((post, index) => (
        <Card post={post} key={index} />
      ))}
    </>
  );
}

export default Sub;
