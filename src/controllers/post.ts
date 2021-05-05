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
      relations: ["comments", "votes"],
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchPost = async (req, res) => {
  const { identifier, slug } = req.params;
  try {
    console.log(slug);
    const post = await Post.findOneOrFail(
      { slug, identifier },
      { relations: ["sub", "comment"] }
    );
    res.json(post);
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
