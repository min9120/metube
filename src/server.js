import express from "express";

const app =express(); //create express application
const PORT = 4000;
const handleHome = (req, res)=> {

  return res.send("i still love you! ");
}
const handleLogin = (req, res)=> {

  return res.send("this is Login page");
}
//request obj, response obj 꼭 두개가 있어야함 eventListener 에서 event가 원래 arg로 들어가있는거랑 같은 맥락임 
 app.get("/",handleHome)
 app.get("/login",handleLogin)
 //누군가 내 app에서 root 에서 get request 를 보낸다면 callback [ 함수 ] 실행 



const handleListening = () => console.log(`server listening on http://localhost:${PORT} 4000 🚀`)
app.listen(PORT, handleListening)