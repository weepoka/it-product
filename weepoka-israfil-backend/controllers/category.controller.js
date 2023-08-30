const Category = require('../models/Category');

// Create a new category
exports.createCategory = async (req, res) => {
	try {
		const axistCategory = await Category.findOne({ name: req.body.name });
		console.log(axistCategory);
		if (axistCategory) {
			return res.status(409).json({
				succes: false,
				message: 'category already exist',
			});
		}
		const category = await Category.create(req.body);
		return res.status(201).json(category);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Read all categories
exports.getAllCategories = async (req, res) => {
	try {
		const categories = await Category.find();
		res.json(categories);
	} catch (error) {
		res.status(500).json({ succes: false, error: error.message });
	}
};

// Read a single category by ID
exports.getCategoryById = async (req, res) => {
	try {
		const category = await Category.findById(req.params.id);
		if (!category) {
			return res.status(404).json({ error: 'Category not found' });
		}
		res.json(category);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Update a category by ID
exports.updateCategory = async (req, res) => {
	try {
		const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!category) {
			return res.status(404).json({ error: 'Category not found' });
		}
		res.json(category);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Delete a category by ID
exports.deleteCategory = async (req, res) => {
	try {
		const category = await Category.findByIdAndDelete(req.params.id);
		if (!category) {
			return res.status(404).json({ error: 'Category not found' });
		}
		res.json({ message: 'Category deleted successfully' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
