import React, { useState } from "react";

import CommentInput from "../../components/Post/commentInput";
import CommentInputNot from "../../components/Post/commentInputNot";
import { Post } from "../../helper/types";
import { useAuthState } from "../../States/Context/Auth";
import { comment as uploadComment } from "../../States/Api/post";

function PostComment({ post }: { post: Post }) {
  const { isAuthenticated, user } = useAuthState();
  const [comment, setcomment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;
    uploadComment(comment, post.identifier, post.slug);
    setcomment("");
  };
  return (
    <>
      {isAuthenticated ? (
        <CommentInput
          user={user}
          comment={comment}
          handleSubmit={handleSubmit}
          setcomment={setcomment}
        />
      ) : (
        <CommentInputNot />
      )}
    </>
  );
}

export default PostComment;
