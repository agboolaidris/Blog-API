import { Router } from "express";

import { createSub, getSub, subImage, topSub } from "../controllers/sub";
import trim from "../middleware/trim";
import AuthMiddleware from "../middleware/auth";
import { subValidator } from "../validators/sub";
import upload from "../utils/multer";
import userSubMiddleware from "../middleware/subUser";
import userMiddleware from "../middleware/user";

const Route = Router();

Route.post("/", [AuthMiddleware, trim, subValidator], createSub);
Route.post(
  "/:name/image",
  [AuthMiddleware, upload.single("image"), userSubMiddleware],
  subImage
);
Route.get("/:name", [userMiddleware], getSub);
Route.get("/", topSub);

export default Route;
