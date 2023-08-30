const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand.controller');

// Create a new brand
router.post('/brands', brandController.createBrand);

// Read all brands
router.get('/brands', brandController.getAllBrands);

// Read a single brand by ID
router.get('/brands/:id', brandController.getBrandById);

// Update a brand by ID
router.put('/brands/:id', brandController.updateBrand);

// Delete a brand by ID
router.delete('/brands/:id', brandController.deleteBrand);

module.exports = router;
