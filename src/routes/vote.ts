import { Router } from "express";

import { createVote } from "../controllers/vote";
import trim from "../middleware/trim";
import AuthMiddleware from "../middleware/auth";

const Route = Router();

Route.post("/", [AuthMiddleware, trim], createVote);

export default Route;
