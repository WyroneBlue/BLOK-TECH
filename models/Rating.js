//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  restaurant_slug: String,
  user_id: String,
  rating: Number,
  remark: String,
  anon: Boolean,
});

const Rating = mongoose.model('Rating', RatingSchema);

module.exports = Rating;