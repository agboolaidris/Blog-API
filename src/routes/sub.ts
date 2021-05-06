import { Router } from "express";

import { createSub, getSub } from "../controllers/sub";
import trim from "../middleware/trim";
import AuthMiddleware from "../middleware/auth";
import { subValidator } from "../validators/sub";
import userMiddleware from "../middleware/user";

const Route = Router();

Route.post("/", [AuthMiddleware, trim, subValidator], createSub);
Route.get("/:name", [userMiddleware], getSub);

export default Route;
