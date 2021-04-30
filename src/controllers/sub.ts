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
