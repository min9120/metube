import express from "express";
import {
  watch,
  deleteVideo,
  postUpload,
  getUpload,
  getEdit,
  postEdit,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
