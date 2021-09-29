import e from "express";
import Video from '../models/Video'

 const handleSearch =(error,videos)=>{
   console.log("errors", error);
   console.log("videos", videos);
 }
export const home = async (req, res) => {
  //[callback ]
  // Video.find({}, (error, videos)=>{
  //   //render를 find callback 함수에 넣어줌으로서 데이터를 모두 가져온 뒤 그려진다.
  //   return res.render("home", {
  //     pageTitle: "home",
  //     videos
  //   });
  // }) 
  //Video.find({},handleSearch)
  //configration and callback! 중괄호 안에는 search terms 가 들어가는데 비어있으면 모든 형식을 찾는다는 것을 뜻함
  //[promise]
  try{
    const videos = await Video.find({});
    return res.render("home", {pageTitle:"home", videos})
  }catch(error){
    return res.render("server-error", error)
  }
  //promise 는 try/catch  로 에러를 사용함 
};
export const watch = (req, res) => {
  const id = req.params.id;
 
  return res.render("watch", { pageTitle: `watch `});
};
export const getEdit = (req, res) => {
  const id = req.params.id;
 
  return res.render("edit", { pageTitle: `Editing ` });
};
export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
 
  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("search page");
export const deleteVideo = (req, res) => res.send("delete video page");
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "upload video" });
};
export const postUpload = (req, res) => {
  //here we will add a video to the videos array
  return res.redirect("/");
};
