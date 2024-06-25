import mongoose, { Schema } from "mongoose";

const favouriteSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  pokemonId: {
    type: Number,
  },
  name: {
    type: String,
  }
}, {
  timestamps: true,
});

export const Favourite = mongoose.model("Favourite", favouriteSchema);
