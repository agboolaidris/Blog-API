import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter, NextRouter } from "next/router";
import useSWR from "swr";

import Banner from "../../../../components/Post/banner";
import PostPage from "../../../../functions/Post/Post";

import { PostComment } from "../../../../helper/types";

function Post() {
  const router: NextRouter = useRouter();

  const { slug, identifier, sub } = router.query;

  const { data: postComment, error } = useSWR<PostComment>(
    slug && identifier ? `/post/${identifier}/${slug}` : null
  );

  if (error) return router.push("/");

  return (
    <>
      <Head>
        <title>
          {postComment && postComment.post && postComment.post.title}
        </title>
      </Head>
      <div>
        {postComment && <Banner sub={postComment.post.sub} />}

        {postComment && (
          <PostPage comments={postComment.comments} post={postComment.post} />
        )}
      </div>
    </>
  );
}

export default Post;
