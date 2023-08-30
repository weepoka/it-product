const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const verifyToken = require('../middleware/verifyToken');
const authorization = require('../middleware/authorization');

router.post('/', orderController.createOrder);
router.get(
	'/getAllOrders',
	verifyToken,
	authorization('admin'),
	orderController.getAllOrder
);

router.get('/:userId', orderController.getOrders);
router.put('/:id', orderController.updateOrder);
module.exports = router;
