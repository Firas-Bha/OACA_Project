import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  
  name: { type: String, required:  true },
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
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    id: { 
      type: String, 
      
      }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);