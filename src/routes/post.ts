import { Router } from "express";

import {
  commentPost,
  createPost,
  fetchPost,
  fetchPosts,
} from "../controllers/post";
import trim from "../middleware/trim";
import AuthMiddleware from "../middleware/auth";

const Route = Router();

Route.post("/", [AuthMiddleware, trim], createPost);
Route.get("/", fetchPosts);
Route.get("/:identifier/:slug", fetchPost);
Route.post("/:identifier/:slug/comment", [AuthMiddleware], commentPost);
export default Route;
