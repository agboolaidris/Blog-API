import { Comment } from "../entities/comment";
import { Post } from "../entities/post";
import { User } from "../entities/User";
import { Vote } from "../entities/vote";

export const createVote = async (req, res) => {
  const { commentIdentifier, value, slug, identifier } = req.body;

  if (![1, 0, -1].includes(value))
    return res.status(400).json({ value: "value must be 1,-1 or 0" });

  try {
    const user: User = res.locals.user;
    let post: Post = await Post.findOneOrFail({ identifier, slug });
    let comment: undefined | Comment;
    let vote: Vote;

    if (commentIdentifier) {
      comment = await Comment.findOneOrFail({ identifier: commentIdentifier });
      vote = await Vote.findOne({ user, comment });
    } else {
      vote = await Vote.findOne({ user, post });
    }

    if (!vote && value === 0)
      return res.status(404).json({ error: "vote not found" });
    else if (!vote) {
      vote = new Vote({ user, value });
      if (comment) {
        vote.comment = comment;
      } else {
        vote.post = post;
      }
      await vote.save();
    } else if (value === 0) {
      await vote.remove();
    } else if (vote.value !== value) {
      vote.value = value;
      await vote.save();
    }

    const response = await Post.findOne(
      { slug, identifier },
      { relations: ["comments", "comments.votes", "sub", "votes"] }
    );

    response.setUserVote(user);
    response.comments.forEach((comment) => comment.setUserVote(user));

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
