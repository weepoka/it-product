import axios from 'axios';

const createCategory = async (category) => {
	const response = await axios.post(
		'http://localhost:5000/api/v1/categories',
		category,
		{ withCredentials: true }
	);
	console.log(response);
	return response;
};

const getAllCategories = async () => {
	try {
		const response = await axios.get(
			'http://localhost:5000/api/v1/categories',
			{ withCredentials: true }
		);
		return response;
	} catch (error) {
		console.error('Error fetching categories:', error.message);
	}
};

export { createCategory, getAllCategories };
