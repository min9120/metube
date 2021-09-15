import express from "express";

const app =express(); //create express application
const PORT = 4000;
//모등 controller 는 미들웨어가 될 수 있음. 
const logger = (req, res, next)=>{

  console.log(`${req.method} : ${req.url}  `);
 
  next();
}

const handleHome = (req, res)=> {
  return res.send("i still love you! ");
}

app.use(logger)

//use()는 global middleware 를 만들 수 있음 그래서 get 전에 써줘야함 
//request obj, response obj 꼭 두개가 있어야함 eventListener 에서 event가 원래 arg로 들어가있는거랑 같은 맥락임 
 app.get("/",handleHome)
 

 //누군가 내 app에서 root 에서 get request 를 보낸다면 callback [ 함수 ] 실행 



const handleListening = () => console.log(`server listening on https://localhost:${PORT}  🚀`)
app.listen(PORT, handleListening)