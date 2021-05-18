import { NextFunction, Request, Response } from "express";
import fs from "fs";
import { Sub } from "../entities/sub";

const userSubMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const type = req.body.type;
  try {
    const sub: Sub = await Sub.findOne({ name: req.params.name });
    if (!sub) return res.status(401).json({ sub: "sub doesnot exist" });

    if (sub.username !== res.locals.user.username)
      return res
        .status(400)
        .json({ image: "authorization denied,you don't own the sub" });

    if (type !== "image" && type !== "banner") {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ type: "type must be image/banner" });
    }

    if (!req.file)
      return res.status(400).json({ image: "only png/jpg format" });

    res.locals.sub = sub;
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default userSubMiddleware;
