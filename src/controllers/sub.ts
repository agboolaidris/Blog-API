import { Post } from "../entities/post";
import { Sub } from "../entities/sub";

export const createSub = async (req, res) => {
  const { name, title, description } = req.body;
  try {
    const sub = await new Sub({
      name,
      title,
      description,
      user: res.locals.user,
    });
    await sub.save();
    res.json(sub);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSub = async (req, res) => {
  const { name } = req.params;
  console.log(name);
  try {
    const sub: Sub = await Sub.findOneOrFail({ name });
    const posts = await Post.find({
      where: { sub },
      order: { createdAt: "DESC" },
      relations: ["comments", "votes"],
    });

    sub.post = posts;

    if (res.locals.user) {
      sub.post.forEach((p) => p.setUserVote(res.locals.user));
    }

    res.json({ sub });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
