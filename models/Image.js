//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
	model_id: String,
	path: String,
	alt: String,
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;