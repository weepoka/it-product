const { json } = require('express');
const Product = require('../models/Product');
const { getProductService } = require('../services/product.service');

exports.createPrduct = async (req, res) => {
	try {
		const product = JSON.parse(req.body.product);
		const imageUrls = req.files.map(
			(file) => `${process.env.APP_URL}/images/${file.filename}`
		);
		product.imageUrls = imageUrls;
		product.image = imageUrls[0];
		// console.log(JSON.parse(req.body.product));

		const newProduct = await Product.create(product);

		if (!newProduct || imageUrls.length < 1) {
			return res.status(401).json({
				success: false,
				message: 'something went wrong please try again',
			});
		}
		console.log(newProduct);
		return res.status(200).json({
			status: 'success',
			message: 'product added ',
		});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

exports.getProducts = async (req, res) => {
	try {
		const products = await getProductService(req);
		if (!products || products.length < 1) {
			return res.status(404).json({
				success: false,
				message: 'no products found',
			});
		}
		return res.status(200).json({
			status: 'success',
			data: products,
		});
	} catch (error) {
		console.log(error);
		return res.status(404).json({
			success: false,
			error,
		});
	}
};

exports.getAllproducts = async (req, res) => {
	try {
		const products = await Product.find();
		return res.status(200).json({
			status: 'success',
			data: products,
		});
	} catch (error) {
		console.log(error);
		return res.status(404).json({
			success: false,
			error,
		});
	}
};

// Controller function to get a single product by ID
exports.getProductById = async (req, res) => {
	try {
		const productId = req.params.id; // Assuming you're passing the product ID in the URL parameter
		const product = await Product.findById(productId);

		if (!product) {
			return res.status(404).json({ error: 'Product not found' });
		}

		res.json(product);
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
};

exports.deleteProduct = async (req, res) => {
	try {
		const productId = req.params.productId;

		// Find the product by ID and delete it
		const deletedProduct = await Product.findByIdAndDelete(productId);

		if (!deletedProduct) {
			return res.status(404).json({
				success: false,
				message: 'Product not found',
			});
		}

		res.status(200).json({
			status: 'success',
			message: 'Product deleted',
			data: deletedProduct,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'An error occurred while deleting the product',
		});
	}
};

exports.updateProduct = async (req, res) => {
	try {
		const productId = req.params.productId;
		const updateData = JSON.parse(req.body.data); // Updated data from the request body
		const image = req.file;

		const url = `${process.env.APP_URL}/images/${image.filename}`;
		updateData.image = url;
		// Find the product by ID and update it
		const updatedProduct = await Product.findByIdAndUpdate(
			productId,
			updateData,
			{ new: true }
		);

		console.log(updatedProduct);

		if (!updatedProduct) {
			return res.status(404).json({
				success: false,
				message: 'Product not found',
			});
		}

		res.status(200).json({
			status: 'success',
			message: 'Product updated',
			// data: updatedProduct,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'An error occurred while updating the product',
		});
	}
};
