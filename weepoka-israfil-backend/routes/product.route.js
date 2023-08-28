const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const uploader = require('../middleware/uploader');
const verifyToken = require('../middleware/verifyToken');
const authorization = require('../middleware/authorization');

router
	.route('/')
	.post(verifyToken, authorization('admin'), productController.createPrduct)
	.get(productController.getProducts);

// router.post('/', uploader.array('images', 12), productController.createPrduct);

router.get(
	'/displayProducts',
	verifyToken,
	authorization('admin'),
	productController.getAllproducts
);
router
	.route('/:productId')
	.get(productController.getProductById)
	.put(verifyToken, authorization('admin'), productController.updateProduct)
	.delete(verifyToken, authorization('admin'), productController.deleteProduct);

module.exports = router;