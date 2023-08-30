const mongoose = require('mongoose');
const validator = require('validator');

const BannerSchema = new mongoose.Schema(
	{
		name: {
			type: String, // Reference to the Product model
			required: true,
		},
		imageURL: {
			type: String,
			validate: [validator.isURL, 'please provide a valid url'],
		},
	}
	// Prevent Mongoose from creating a separate _id for each cart item
);

const Banner = mongoose.model('Banner', BannerSchema);
module.exports = Banner;
