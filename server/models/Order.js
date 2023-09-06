const mongoose = require('mongoose');

const validator = require('validator');
const { ObjectId, Mixed } = mongoose.Schema.Types;

const OrderSchema = mongoose.Schema(
	{
		user: {
			id: {
				type: ObjectId,
				ref: 'User',
			},
			name: String,
		},
		transactionId: {
			type: String,
		},
		products: [
			{
				id: {
					type: ObjectId,
					ref: 'Product',
				},
				name: String,
				quantity: String,
				productPin: String,
				image: String,
			},
		],
		quantity: {
			type: String,
			// required: [true, 'please provide quantity'],
		},
		price: {
			type: Number,
			required: [true, 'Please provide a price for this product.'],
		},
		contactNumber: String,
		paidStatus: {
			type: Boolean,
			enum: [true, false],
			default: false,
		},
		paymentMethod: {
			type: String,
		},
		orderStatus: {
			type: String,
			enum: ['pending', 'processing', 'completed', 'canceled'],
			default: 'pending',
		},
		area: {
			type: String,
		},
		city: {
			type: String,
		},

		image: {
			type: String,
			// required: [true, 'Please provide the img urls'],
		},
		address: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
