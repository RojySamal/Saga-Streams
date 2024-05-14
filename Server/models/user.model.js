import mongoose from "mongoose";

const userdataSchema = mongoose.Schema({
    name: {
      type: {
        firstname: {
          type: String,
          required: true,
        },
        lastname: {
          type: String,
          required: false,
        },
      },
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      lowercase: true, 
      trim: true, 
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
    },
    password: {
      type: String,
      required: true,
    },
    profileurl:{
      type:String,
      required:false,
    }
  });

const UserDataModel = mongoose.model("UsersData", userdataSchema);
export default UserDataModel;