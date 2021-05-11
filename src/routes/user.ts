import { Router } from "express";
import { Comment } from "../entities/comment";
import { Post } from "../entities/post";
import { User } from "../entities/User";
import userMiddware from "../middleware/user";
const route = Router();

route.get("/:username", [userMiddware], async (req, res) => {
  try {
    const user: User = await User.findOneOrFail({
      where: { username: req.params.username },
      select: ["username", "createdAt"],
    });

    const posts: Post[] = await Post.find({
      where: { user },
      relations: ["comments", "votes", "sub"],
    });

    const comments: Comment[] = await Comment.find({
      where: { user },
      relations: ["post"],
    });

    if (res.locals.user) {
      posts.forEach((p) => p.setUserVote(res.locals.user));
      comments.forEach((c) => c.setUserVote(res.locals.user));
    }

    let submission: any = [];
    posts.forEach((p) => submission.push({ type: "post", ...p.toJSON() }));
    comments.forEach((p) =>
      submission.push({ type: "comment", ...p.toJSON() })
    );
    submission.sort((a, b) => {
      if (b.createdAt > a.createdAt) return 1;
      if (b.createdAt < a.createdAt) return -1;
      return 0;
    });
    res.json({ user, submission });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default route;
