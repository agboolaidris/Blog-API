import { validate } from "class-validator";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { User } from "../entities/User";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });

    await user.save();

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const token = jwt.sign(
      { username: res.locals.user.username },
      process.env.JWT_SECRET
    );

    res.set(
      "Set-Cookie",
      cookie.serialize("access-token", token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 3600,
        path: "/",
      })
    );

    res.json({ user: res.locals.user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.set(
      "Set-Cookie",
      cookie.serialize("access-token", "", {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        expires: new Date(0),
        path: "/",
      })
    );

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const isMe = async (req: Request, res: Response) => {
  try {
    console.log(res.locals.user);
    const user = await User.findOneOrFail({
      username: res.locals.user.username,
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
