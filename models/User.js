//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  school: String,
  img: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Rating' }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
