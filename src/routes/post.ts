import { Router } from "express";

import { createPost } from "../controllers/post";
import trim from "../middleware/trim";
import AuthMiddleware from "../middleware/auth";

const Route = Router();

Route.post("/", [AuthMiddleware, trim], createPost);

export default Route;
