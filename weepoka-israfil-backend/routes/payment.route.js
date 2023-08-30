const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/process', paymentController.processPayment);
router.post('/success/:transId', paymentController.paymentSuccess);
router.post('/fail', paymentController.paymentFailure);
router.post('/cancel', paymentController.paymentCancel);
router.post('/ipn', paymentController.paymentIpn);

module.exports = router;
