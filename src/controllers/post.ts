import { Comment } from "../entities/comment";
import { Post } from "../entities/post";
import { Sub } from "../entities/sub";

export const createPost = async (req, res) => {
  const { title, body, sub } = req.body;
  try {
    if (title.trim() === "")
      return res.status(400).json({ title: "title is required" });

    const subRecord = await Sub.findOneOrFail({ name: sub });

    const post = await new Post({
      title,
      body,
      subName: sub,
      sub: subRecord,
      user: res.locals.user,
    });
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchPosts = async (req, res) => {
  try {
    const posts = await Post.find({
      order: { createdAt: "DESC" },
      relations: ["comments", "comments.votes", "votes", "sub"],
    });

    if (res.locals.user) {
      posts.forEach((post) => post.setUserVote(res.locals.user));
    }

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchPost = async (req, res) => {
  const { identifier, slug } = req.params;
  try {
    const post: Post = await Post.findOneOrFail(
      { slug, identifier },
      { relations: ["comments", "comments.votes", "votes", "sub"] }
    );
    const comments: Comment[] = await Comment.find({
      where: { post },
      order: { createdAt: "DESC" },
      relations: ["votes"],
    });

    if (res.locals.user) {
      comments.forEach((comment) => comment.setUserVote(res.locals.user));
      post.setUserVote(res.locals.user);
    }

    res.json({ post, comments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const commentPost = async (req, res) => {
  const { identifier, slug } = req.params;
  const { body } = req.body;

  if (!body) return res.status(400).json({ body: "body most not be empty" });
  try {
    const post = await Post.findOneOrFail({ slug, identifier });

    const comment = await new Comment({
      body,
      user: res.locals.user,
      post,
    });
    await comment.save();

    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchComment = async (req, res) => {
  const { identifier, slug } = req.params;
  try {
    const post: Post = await Post.findOneOrFail(
      { slug, identifier },
      { relations: ["sub", "comments", "votes", "comments.votes"] }
    );

    if (res.locals.user) {
      post.setUserVote(res.locals.user);
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
