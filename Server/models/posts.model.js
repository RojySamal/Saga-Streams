import mongoose from "mongoose";
import UserDataModel from "./user.model"; 

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  topic: {
    type: [String],
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UsersData',
    required: true
  }
});

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
