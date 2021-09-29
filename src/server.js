
import express, { Router } from "express";
import morgan from "morgan";
import userRouter from "./routes/userRouter";
import globalRouter from "./routes/globalRouter";
import videoRouter from "./routes/videoRouter";

const app = express(); //create express application
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app