const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

router.post('/', orderController.createOrder);
router.get('/getAllOrders', orderController.getAllOrder);

router.get('/:userId', orderController.getOrders);
router.put('/:id', orderController.updateOrder);
module.exports = router;
