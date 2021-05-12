import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../entities/User";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cookie = req.cookies["access-token"];

    if (!cookie) res.status(401).json({ error: "unathorize" });

    const { username }: any = jwt.verify(cookie, process.env.JWT_SECRET);

    if (!username)
      return res.status(400).json({ error: "unathorized,user verified fail" });

    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({ error: "unathorized,user verified fail" });

    res.locals.user = user;

    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default authMiddleware;
