import { Post } from "../entities/post";

export const createPost = async (req, res) => {
  const { title, body, sub } = req.body;
  try {
    if (title.trim() === "")
      return res.status(400).json({ title: "title is required" });

    const post = await new Post({
      title,
      body,
      subName: sub,
      user: res.locals.user,
    });
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
