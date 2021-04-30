import { Router } from "express";

import { createSub } from "../controllers/sub";
import trim from "../middleware/trim";
import AuthMiddleware from "../middleware/auth";
import { subValidator } from "../validators/sub";

const Route = Router();

Route.post("/", [AuthMiddleware, trim, subValidator], createSub);

export default Route;
