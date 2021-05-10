import React from "react";
import CommentInput from "../../components/Post/commentInput";
import CommentInputNot from "../../components/Post/commentInputNot";

import { Post } from "../../helper/types";
import { useAuthState } from "../../States/Context/Auth";

function PostComment({ post }: { post: Post }) {
  const { isAuthenticated, user } = useAuthState();
  return (
    <>{isAuthenticated ? <CommentInput user={user} /> : <CommentInputNot />}</>
  );
}

export default PostComment;
