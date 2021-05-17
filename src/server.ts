import { createConnection } from "typeorm";
import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./routes/auth";
import postRoute from "./routes/post";
import subRoute from "./routes/sub";
import voteRoute from "./routes/vote";
import userRoute from "./routes/user";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//cookie-parser
app.use(cookieParser());

//setup bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config cors
app.use(
  cors({
    credentials: true,
    origin: [process.env.ORIGIN, "http://localhost:3000"],
    exposedHeaders: ["access-token"],
    optionsSuccessStatus: 200,
  })
);

//static files
app.use(express.static(path.join(__dirname, "../public")));

//setup route
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/sub", subRoute);
app.use("/api/vote", voteRoute);
app.use("/api/user", userRoute);

app.listen(PORT, async () => {
  console.log(`app is listen on port ${PORT}!`);
  try {
    await createConnection();
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
});
