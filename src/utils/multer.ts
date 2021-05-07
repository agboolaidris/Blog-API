import multer, { FileFilterCallback } from "multer";
import path from "path";
import { makeId } from "./helper";
const storage = multer.diskStorage({
  destination: "public/images",
  filename: (_, file, cb) => {
    cb(null, makeId(10) + file.originalname);
  },
});

const fileFilter = (_, file: any, cb: FileFilterCallback) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null);
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
