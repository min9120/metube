import express from 'express'
import {join} from "../controllers/userController"
import {trendingVideo} from "../controllers/videoController"
const globalRouter = express.Router();

globalRouter.get('/', trendingVideo)
globalRouter.get('/join', join)

export default globalRouter;