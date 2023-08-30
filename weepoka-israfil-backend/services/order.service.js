const Product = require('../models/Product');
const User = require('../models/User');

exports.orderService = async (req, tran_id) => {
	const order = req.body;
	const user = await User.findOne({ _id: order.userId });

	const product = await Product.findOne({ _id: order.productId });
	product.price = product.price * order.quantity;

	const productOrder = {
		transactionId: tran_id,
		price: product.price * order.quantity, // in paisa
		...order,
		productCategory: product.category,
		transactionId: tran_id,
		user: {
			id: user._id,
			name: user.name,
		},
		product: {
			name: product.name,
			id: order.productId,
		},
	};

	return productOrder;
};
