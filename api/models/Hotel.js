import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  catégorie: {
    type: String,
    required: true,
  },

  photos: {
    type: [String],
  },
  desc: {
    type: String,
    required: true,
  },
  Prix: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Hotel", HotelSchema)