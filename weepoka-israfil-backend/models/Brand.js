const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: [true, 'please probide a brand name'],
			maxLength: 100,
			unique: true,
			lowercase: true,
		},
		image: String,
		status: {
			type: String,
			enum: ['active', 'inactive'],
			default: 'active',
		},
	},
	{
		timestamps: true,
	}
);

const Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;
