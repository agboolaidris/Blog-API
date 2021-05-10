import React from "react";
import Vote from "../../functions/Home/Vote";
import { Comment as CommentType, Post, PostComment } from "../../helper/types";

function Comment({ post, comment }: { post: Post; comment: CommentType }) {
  return (
    <div className="flex">
      <p className="">{comment.body}</p>
    </div>
  );
}

export default Comment;
