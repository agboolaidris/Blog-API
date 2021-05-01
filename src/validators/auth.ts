import { User } from "../entities/User";
import bcrypt from "bcrypt";

export const loginValidator = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let error: any = {};

    if (!email) error.email = "email must not be empty";
    if (!password) error.password = "password must not be empty";

    if (Object.keys(error).length > 0) return res.status(400).json(error);

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ email: "invalid credentials" });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch)
      return res.status(400).json({ email: "email or password not match" });

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
};

export const registerValidator = async (req, res, next) => {
  const { username, email, password, password2 } = req.body;

  try {
    const error: any = {};

    //check if the field is exist
    if (!email) error.email = "must not be empty ";
    if (!username) error.username = "must not be empty";
    if (!password) error.password = "must not be empty";
    if (Object.keys(error).length > 0) return res.status(400).json(error);

    //check password length
    if (password.length < 6) error.password = "must be 6 characters or more";

    //check password match
    if (password !== password2) error.password2 = "password not match";
    if (Object.keys(error).length > 0) return res.status(400).json(error);

    //check if email already exist in database
    const user_email = await User.findOne({ email });

    if (user_email)
      return res.status(400).json({ email: "email already exist " });

    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
