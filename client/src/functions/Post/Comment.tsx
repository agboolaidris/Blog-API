import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import CommentComp from "../../components/Post/Comment";
import { PostComment } from "../../helper/types";
function Comment() {
  const post: PostComment = useSelector(
    (state: RootStateOrAny) => state.Post.post
  );

  return (
    <>
      {post &&
        post.comments.map((comment, index) => (
          <CommentComp comment={comment} key={index} post={post.post} />
        ))}
    </>
  );
}

export default Comment;
