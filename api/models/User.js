
import mongoose from "mongoose";
let Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema(
  {
    name: { type: String},
    username: { type: String},
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      
    },
    img: {
      type: String,
    },
    city: {
      type: String,
      
    },
    phone: {
      type: String,
     
    },
    password: {
      type: String,
      required: true,
      minlength: [6 ,"Password must be atleast 6 character long."]
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: [],
    },
    id:{ 
     
      type: String
      
      }
  },
  { timestamps: true }
);

export default mongoose.models.User|| mongoose.model("User", UserSchema);
