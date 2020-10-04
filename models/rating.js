const mongoose = require("mongoose");
const { Schema } = mongoose;

const ratingSchema = new Schema({
  u_id: String,
  comments: String,
  date: Date,
  stars: Number,
});

const Rating = mongoose.model("rating", ratingSchema);
exports.Rating = Rating;
exports.rating = ratingSchema;

async function createRating(u_id, comments, stars) {
  const rating = new Rating({
    u_id,
    comments,
    stars,
  });
  const result = await rating.save();
  console.log(result);
}
// createRating();
