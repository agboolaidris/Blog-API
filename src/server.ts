import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import auth from "./routes/auth";

dotenv.config();

const app = express();

//cookie-parser
app.use(cookieParser());

//setup bodyparser
app.use(express.json());
app.use(express.urlencoded());

//setup route
app.use("/api/auth", auth);

app.listen(5000, async () => {
  console.log(`app is listen on port 5000`);
  try {
    await createConnection();
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
});
