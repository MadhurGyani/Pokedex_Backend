import { Favourite } from "../models/favourite.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
const toggleFavorite = asyncHandler(async (req, res) => {
  // Check if user exist
  // Check if the favourite item already exists for the user
  // If it exists, remove it
  // If it doesn't exist, add it
  const userId = req.user._id;
  const { pokemonId, name } = req.body;

  if (!pokemonId || !name) {
    throw new ApiError(400, "Pokemon ID and name are required");
  }

  const existingFavourite = await Favourite.findOne({ userId, pokemonId });

  if (existingFavourite) {
    await existingFavourite.remove();
    return res
      .status(200)
      .json(new ApiResponse(200, existingFavourite, "Favourite removed"));
  } else {
    const newFavourite = new Favourite({ userId, pokemonId, name });
    await newFavourite.save();
    return res
      .status(200)
      .json(new ApiResponse(200, newFavourite, "new Favourite added"));
  }
});




const getFavorites = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  // Find all favorite items for the user
  const favourites = await Favourite.find({ userId: userId }).select("-_id -userId -createdAt -updatedAt -__v");

  res.status(200).json(new ApiResponse(200,favourites,"Favourites fetched successfully"));
});



export { 
    toggleFavorite,
    getFavorites 
};
