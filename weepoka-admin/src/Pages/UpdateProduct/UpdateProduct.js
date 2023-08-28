import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
	// const history =useHistory()
	const { id } = useParams();
	console.log(id);
	const [storeProduct, setStoreProduct] = useState([]);
	const [updateProduct, setUpdateProduct] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/api/v1/products`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setStoreProduct(data);
				setUpdateProduct(data);
			});
	}, []);
	console.log(storeProduct._id);
	console.log(updateProduct);
	const handleUpdateUser = (event) => {
		event.preventDefault();
		// console.log(user);
		fetch(`http://localhost:5000/api/v1/products/${storeProduct._id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(updateProduct),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					alert('Product updated');
					console.log(data);
				}
			});
	};

	const handleInputChange = (event) => {
		const field = event.target.name;
		const value = event.target.value;
		const newProduct = { ...updateProduct };
		newProduct[field] = value;
		setUpdateProduct(newProduct);
	};
	return (
		<div>
			<div>
				<h3 className='mb-3'>Basic Information</h3>
				<form onSubmit={handleUpdateUser}>
					<div className='form-group mb-3'>
						<label className='mb-2'>Product Name</label>
						<input
							onBlur={handleInputChange}
							defaultValue={storeProduct.name}
							type='text'
							name='name'
							className='form-control'
							placeholder='Enter Your Product name'
						/>
					</div>
					<div className='form-group mb-3'>
						<label className='mb-2'>Stock Product Quantity</label>
						<input
							onBlur={handleInputChange}
							type='quantity'
							defaultValue={storeProduct.quantity}
							name='quantity'
							className='form-control'
							placeholder='quantity'
						/>
					</div>
					<div className='form-group mb-3'>
						<label className='mb-2'>Pricing</label>
						<input
							onBlur={handleInputChange}
							type='text'
							defaultValue={storeProduct.newPrice}
							name='price'
							className='form-control mb-3'
							placeholder='new price'
						/>
						<input
							onBlur={handleInputChange}
							type='text'
							defaultValue={storeProduct.oldPrice}
							name='oldPrice'
							className='form-control mb-3'
							placeholder='old price'
						/>
						<input
							onBlur={handleInputChange}
							type='text'
							defaultValue={storeProduct.offerPrice}
							name='offerPrice'
							className='form-control mb-3'
							placeholder='offer price(%)'
						/>
					</div>
					<div className='form-group mb-3'>
						<label className='mb-2'>Brand</label>
						<select
							onBlur={handleInputChange}
							className='form-control'
							defaultValue={storeProduct.brand}
							name='brand'
							type='text'
						>
							<option>Brand 1</option>
							<option>Brand 2</option>
							<option>Brand 3</option>
							<option>Brand 4</option>
							<option>Brand 5</option>
						</select>
					</div>
					<div className='form-group mb-3'>
						<label className='mb-2'>Category</label>
						<select
							onBlur={handleInputChange}
							className='form-control'
							type='text'
							defaultValue={storeProduct.category}
							name='category'
						>
							<option>Category 1</option>
							<option>Category 2</option>
							<option>Category 3</option>
							<option>Category 4</option>
							<option>Category 5</option>
						</select>
					</div>
					<div class='form-group my-4'>
						<label className='mb-2'>Image</label> <br />
						<input
							onBlur={handleInputChange}
							type='file'
							className='form-control-file'
							name='image'
						/>
					</div>

					<div className='form-group mb-3'>
						<label className='mb-2'>Description</label>
						<textarea
							onBlur={handleInputChange}
							className='form-control'
							type='text'
							defaultValue={storeProduct.description}
							name='Description'
							rows='3'
						></textarea>
					</div>
					<button
						className='btn btn-success border-0 rounded-3 my-5'
						type='submit'
					>
						Update Product
					</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateProduct;
