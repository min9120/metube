import e from "express";

const fakeUser = {
  userName: "gmin",
  loggedIn: true,
};

let videos = [
  {
    title: "First Video",
    rating: 3,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "second Video",
    rating: 3,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 3,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];
export const trendingVideo = (req, res) => {
  return res.render("home", {
    pageTitle: "home",
    fakeUser: fakeUser,
    videos: videos,
  });
};
export const watch = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `watch ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  videos[id - 1].title = title;

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
