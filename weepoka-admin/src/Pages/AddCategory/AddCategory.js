import React, { useState } from 'react';
import CustomInput from './../CustomInput/CustomInput';
import { createCategory } from '../../ApiService/apiService';

const AddCategory = () => {
	const [category, setCategory] = useState('');
	const [error, setError] = useState('');
	const inputChangeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setCategory(value);
	};

	const handleAddcategory = (e) => {
		e.preventDefault();
		createCategory({ name: category })
			.then((res) => {
				console.log(res);
				if (res.status == 201) {
					setCategory('');
					return alert('category added');
				}
			})
			.catch((error) => setError(error.message));
	};
	return (
		<div>
			<h3 className='mb-4  title'>Add Category</h3>
			<div>
				<form>
					<CustomInput
						type='text'
						label='Enter Add Category'
						inputChangeHandler={inputChangeHandler}
						name='name'
						value={category}
					/>
					<p style={{ color: 'red' }}>{error}</p>
					<button
						onClick={handleAddcategory}
						className='btn btn-success border-0 rounded-3 my-5'
						type='submit'
					>
						Add Category
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddCategory;
