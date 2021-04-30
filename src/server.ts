import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoute from "./routes/auth";
import postRoute from "./routes/post";
import subRoute from "./routes/sub";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//cookie-parser
app.use(cookieParser());

//setup bodyparser
app.use(express.json());
app.use(express.urlencoded());

//setup route
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/sub", subRoute);

app.listen(PORT, async () => {
  console.log(`app is listen on port ${PORT}!`);
  try {
    await createConnection();
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
});
