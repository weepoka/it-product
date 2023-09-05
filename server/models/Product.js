const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId, Mixed } = mongoose.Schema.Types;

// schema design

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide a name for this product.'],
			trim: true,
			lowercase: true,
			// minlength: [3, "Name must be at least 3 characters."],
			// maxlength: [100, "Name must be less than 100 characters."],
		},
		description: {
			type: String,
			required: [true, 'Please provide a description for this product.'],
		},
		oldPrice: {
			type: Number,
			required: [true, 'Please provide a price for this product.'],
		},
		offerPrice: {
			type: Mixed,
			default: null,
		},
		offerPercentage: {
			type: Mixed,
			default: null,
		},
		discountPrice: {
			type: Mixed,
		},

		stock: {
			type: Mixed,
		},
		brand: String,
		productPin: {
			type: String,
			required: true,
		},

		imageUrls: [
			{
				type: String,
				required: [true, 'Please provide the img urls'],
			},
		],
		image: String,
		brand: String,
		category: {
			type: String,
			lowercase: true,
		},
		status: {
			type: String,
			enum: ['in-stock', 'out-of-stock'],
			default: 'in-stock',
		},
		newArrival: String,
		subcategory: String,
	},
	{
		timestamps: true,
	}
);

// mongoose middleweares for saving data:pre / post
// productSchema.pre('save', function (next) {
// 	console.log('before saving data');
// 	if (this.quantity == 0) {
// 		this.status = 'out-of-stock';
// 	}
// 	next();
// });

// productSchema.post('save', function (doc, next) {
// 	console.log('After saving data', doc);
// 	next();
// });

//| creating instance on prodcut
// productSchema.methods.logger = function () {
// 	console.log(`Data saved for ${this.name}`);
// };

// SCHEMA --> MODEL----> query
const Product = mongoose.model('Products', productSchema);

module.exports = Product;
