import { Router } from "express";

import {
  commentPost,
  createPost,
  fetchPost,
  fetchPosts,
} from "../controllers/post";
import trim from "../middleware/trim";
import AuthMiddleware from "../middleware/auth";
import userMiddleware from "../middleware/user";

const Route = Router();

Route.post("/", [AuthMiddleware, trim], createPost);
Route.get("/", [userMiddleware], fetchPosts);
Route.get("/:identifier/:slug", [userMiddleware], fetchPost);
Route.post("/:identifier/:slug/comment", [AuthMiddleware], commentPost);
export default Route;
