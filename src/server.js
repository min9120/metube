import express, { Router } from "express";
import morgan from "morgan";
import userRouter from "./routes/userRouter";
import globalRouter from "./routes/globalRouter";
import videoRouter from "./routes/videoRouter";



const PORT = 4000;
const app =express(); //create express application
const logger = morgan("dev");
app.use(logger);



app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);




//모등 controller 는 미들웨어가 될 수 있음. 

//use()는 global middleware 를 만들 수 있음 그래서 get 전에 써줘야함 
//request obj, response obj 꼭 두개가 있어야함 eventListener 에서 event가 원래 arg로 들어가있는거랑 같은 맥락임 
 

 //누군가 내 app에서 root 에서 get request 를 보낸다면 callback [ 함수 ] 실행 



const handleListening = () => console.log(`server listening on http://localhost:${PORT}  🚀`)
app.listen(PORT, handleListening)