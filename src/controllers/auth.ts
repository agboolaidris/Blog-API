import { validate } from "class-validator";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { User } from "../entities/User";
import { response } from "express";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });

    const errors = await validate(user);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    await user.save();

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = jwt.sign(
      { username: req.user.username },
      process.env.JWT_SECRET
    );

    res.set(
      "Set-Cookie",
      cookie.serialize("access-token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 3600,
        path: "/",
      })
    );

    res.json({ user: req.user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.set(
      "Set-Cookie",
      cookie.serialize("access-token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
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