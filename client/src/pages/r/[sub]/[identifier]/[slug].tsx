import React, { useEffect } from "react";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { fetchPost } from "../../../../Redux/Action/Post";

import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import Banner from "../../../../functions/Post/banner";
import PostPage from "../../../../functions/Post/Post";
import { Post as PostType } from "../../../../helper/types";
function Post() {
  const dispatch = useDispatch();
  const post: PostType = useSelector(
    (state: RootStateOrAny) => state.Post.post.post
  );
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
