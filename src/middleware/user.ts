import jwt from "jsonwebtoken";
import { User } from "../entities/User";

const userMiddleware = async (req, res, next) => {
  try {
    const cookie = req.cookies["access-token"];

    if (!cookie) return next();

    const { username }: any = jwt.verify(cookie, process.env.JWT_SECRET);

    if (!username) return next();

    const user = await User.findOne({ username });
    if (!user) next();

    res.locals.user = user;

    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default userMiddleware;
