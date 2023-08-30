const Banner = require('../models/Banner');

// GET all banners
exports.getBanners = async (req, res) => {
	try {
		const banners = await Banner.find();
		res.json(banners);
	} catch (error) {
		res.status(500).json({ error: 'Server error' });
	}
};

// POST a new banner
exports.createBanner = async (req, res) => {
	try {
		const banner = await Banner.create(req.body);
		res.status(201).json(banner);
	} catch (error) {
		res.status(400).json({ error: 'Invalid data' });
	}
};

// PUT (update) a banner

// DELETE a banner
exports.deleteBanner = async (req, res) => {
	try {
		await Banner.findByIdAndDelete(req.params.id);
		res.sendStatus(204);
	} catch (error) {
		res.status(400).json({ error: 'Invalid data' });
	}
};
