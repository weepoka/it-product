const Brand = require('../models/Banner');

// Create a new brand
exports.createBrand = async (req, res) => {
	try {
		const brand = new Brand(req.body);
		await brand.save();
		res.status(201).json(brand);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Read all brands
exports.getAllBrands = async (req, res) => {
	try {
		const brands = await Brand.find();
		res.status(200).json({
			data: brands,
			success: true,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Read a single brand by ID
exports.getBrandById = async (req, res) => {
	try {
		const brand = await Brand.findById(req.params.id);
		if (!brand) {
			return res.status(404).json({ success: false, error: 'Brand not found' });
		}
		res.json(brand);
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
};

// Update a brand by ID
exports.updateBrand = async (req, res) => {
	try {
		const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!brand) {
			return res.status(404).json({ error: 'Brand not found' });
		}
		res.json(brand);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Delete a brand by ID
exports.deleteBrand = async (req, res) => {
	try {
		const brand = await Brand.findByIdAndDelete(req.params.id);
		if (!brand) {
			return res.status(404).json({ success: false, error: 'Brand not found' });
		}
		res.json({ success: true, message: 'Brand deleted successfully' });
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
};
