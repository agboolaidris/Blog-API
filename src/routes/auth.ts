import { Router } from "express";

import { login, register, logout } from "../controllers/auth";
import { registerValidator, loginValidator } from "../validators/auth";
import trim from "../middleware/trim";
import AuthMiddleware from "../middleware/auth";

const Route = Router();

Route.post("/register", [trim, registerValidator], register);

Route.post("/login", [trim, loginValidator], login);

Route.get("/logout", [AuthMiddleware], logout);

Route.get("/test", [AuthMiddleware], (req, res) => {
  res.json({ msg: "hhhh" });
});

export default Route;
