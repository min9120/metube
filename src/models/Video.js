import mongoose from "mongoose";
import videoRouter from "../routes/videoRouter";

const videoSchema = new mongoose.Schema({
  title: {type:String, required:true},
  description: {type:String, required:true},
  createdAt: {type:Date, required:true, default:Date.now},
  //매번 createAt 에 Date.now() 해주기 귀찮으니까 기본 값으로 설정! 근데 Date.now() 괄호 붙이면 이 함수를 먼저 실행하려고 하기 때문에 괄호는 삭제
  hashtags: [{ type: String, required:true }],
  meta: {
    views: {type:Number, default:0, required:true},
    rating: {type:Number, default:0, required:true},
  },
});
//schema 는 데이터의 형태를 정의해줌 

const Video = mongoose.model("Video", videoSchema);
export default Video;
