import React from "react";
import Sidebar from "../../components/shared/Sidebar";
import Card from "../../components/Post/Card";
import { Post as PostType, Comment } from "../../helper/types";
import CommentComp from "../../components/Post/Comment";
import { useAuthState } from "../../States/Context/Auth";
import PostComment from "./PostComment";

function Post({ post, comments }: { post: PostType; comments: Comment[] }) {
  const { isAuthenticated } = useAuthState();
  return (
    <div className="flex wrapper ">
      <div className="mt-2 bg-gray-100 min-h-screen-20">
        {post && <Card post={post} />}

        <PostComment post={post} />
        <hr />

        {post &&
          comments &&
          comments.map((comment, index) => (
            <CommentComp comment={comment} key={index} post={post} />
          ))}
      </div>
      <div className="hidden mt-2 ml-2 sm:block w-72">
        {post && <Sidebar sub={post.sub} isAuthenticated={isAuthenticated} />}
      </div>
    </div>
  );
}

export default Post;
