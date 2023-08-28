const { json } = require('express');
const Product = require('../models/Product');
const { getProductService } = require('../services/product.service');

exports.createPrduct = async (req, res) => {
	try {
		const product = req.body;
		// const imageUrls = req.files.map((file) => `/images/${file.filename}`);
		// product.imageUrls = imageUrls;
		console.log(product);

		const newProduct = await Product.create(product);

		// if (!newProduct || imageUrls.length ) {
		if (!newProduct) {
			return res.status(401).json({
				status: 'fail',
				message: 'something went wrong please try again',
			});
		}
		return res.status(200).json({
			status: 'success',
			message: 'product added ',
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			status: 'fail',
			message: error.message,
		});
	}
};

exports.getProducts = async (req, res) => {
	try {
		const products = await getProductService(req);
		if (!products || products.length < 1) {
			return res.status(404).json({
				status: 'fail',
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
			status: 'fail',
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
			status: 'fail',
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
				status: 'fail',
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
			status: 'fail',
			message: 'An error occurred while deleting the product',
		});
	}
};

exports.updateProduct = async (req, res) => {
	try {
		const productId = req.params.productId;
		const updateData = req.body; // Updated data from the request body

		// Find the product by ID and update it
		const updatedProduct = await Product.findByIdAndUpdate(
			productId,
			updateData,
			{ new: true }
		);

		if (!updatedProduct) {
			return res.status(404).json({
				status: 'fail',
				message: 'Product not found',
			});
		}

		res.status(200).json({
			status: 'success',
			message: 'Product updated',
			data: updatedProduct,
		});
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: 'An error occurred while updating the product',
		});
	}
};
