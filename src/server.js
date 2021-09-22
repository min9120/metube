import express, { Router } from "express";
import morgan from "morgan";
import userRouter from "./routes/userRouter";
import globalRouter from "./routes/globalRouter";
import videoRouter from "./routes/videoRouter";

const PORT = 4000;
const app = express(); //create express application
const logger = morgan("dev");
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`server listening on http://localhost:${PORT}  🚀`);
app.listen(PORT, handleListening);
