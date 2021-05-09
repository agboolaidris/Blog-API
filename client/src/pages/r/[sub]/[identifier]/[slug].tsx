import React, { useEffect } from "react";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { fetchPost } from "../../../../Redux/Action/Post";

import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import Banner from "../../../../functions/Post/Banner";
import PostPage from "../../../../functions/Post/Post";
function Post() {
  const dispatch = useDispatch();
  const post = useSelector((state: RootStateOrAny) => state.Post.post);
  const router: NextRouter = useRouter();
  const { slug, identifier, sub } = router.query;

  useEffect(() => {
    slug && identifier && dispatch(fetchPost(slug, identifier, router));
  }, [slug, identifier]);

  return (
    <>
      <Head>
        <title>{post && post.title}</title>
      </Head>
      <div>
        <Banner />
        <PostPage />
      </div>
    </>
  );
}

export default Post;
