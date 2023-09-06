import React, { useContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { SiMinutemailer } from 'react-icons/si';

import { category } from '../../../../ApiServices/fakeData';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../../Loading/Loading';
import { toast } from 'react-hot-toast';

const AdminAddProducts = () => {
	const { loading, setLoading } = useContext(AuthContext);
	const [product, setProduct] = useState({});
	const [formData, setFormData] = useState({});
	const [selectedImages, setSelectedImages] = useState([]);
	const [categoryData, setCategory] = useState(category);
	const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
	const [offerPrice, setOfferPrice] = useState(0);
	const [selectedSubcategoryIndex, setSelectedSubcategoryIndex] = useState(0);

	const handleSubmit = async (e) => {
		// setLoading(true);

		e.preventDefault();
		const formDataObj = new FormData();
		formData.offerPrice = offerPrice;
		formDataObj.append('product', JSON.stringify(formData));
		selectedImages.forEach((image) => {
			formDataObj.append('images', image);
		});
		console.log(formData);
		try {
			const response = await fetch(`${process.env.REACT_APP_SERVER}/products`, {
				method: 'POST',
				body: formDataObj,
				credentials: 'include',
			});
			const data = await response.json();

			if (response.ok) {
				document.getElementById('myForm').reset();
				toast.success('product added');
				console.log('Data and images uploaded successfully');
				return;

				// Reset form and image state or perform other actions
			} else {
				console.error('Upload failed');
			}
		} catch (error) {
			console.error('Error uploading data and images:', error);
		} finally {
			setLoading(false);
		}
	};

	const handleImageChange = (e) => {
		const files = e.target.files;
		const imageList = [];

		setSelectedImages([...selectedImages, ...files]);
	};
	// const handleInputBlur = (event) => {
	//   const field = event.target.name;
	//   const value = event.target.value;
	//   const newProduct = { ...product };
	//   newProduct[field] = value;
	//   setProduct(newProduct);
	//   console.log(value);
	// };

	//offer price calculation
	const handleDiscount = (e) => {
		const { name, value } = e.target;

		let discountPriceInput = document.getElementById('discountPrice');
		let offerPercentageInput = document.getElementById('discount');
		let regularPrice = Number(document.getElementById('price').value);
		let totalInput = document.getElementById('total');

		if (!regularPrice) return alert('please provide your regular price');
		let newPrice = 0;
		let percentage = 0;
		let discountPrice = 0;

		if (name === 'offerPercentage') {
			newPrice = regularPrice - (regularPrice * Number(value)) / 100;
			discountPrice = regularPrice - newPrice;

			formData.discountPrice = Math.round(discountPrice);
			discountPriceInput.value = Math.round(discountPrice);
			totalInput.value = newPrice;
			setOfferPrice(newPrice);
		} else if (name === 'discountPrice') {
			newPrice = regularPrice - Number(value);
			percentage = 100 / (regularPrice / Number(value));
			offerPercentageInput.value = percentage.toFixed(0);
			totalInput.value = Math.round(newPrice);
			formData.offerPercentage = Math.round(percentage);
			formData.offerPrice = Math.round(newPrice);
			setOfferPrice(newPrice);
		}

		console.log(formData);
	};
	// const getPrice = () => {
	// 	var numVal1 = Number(document.getElementById('price').value);
	// 	var numVal2 = Number(document.getElementById('discount').value) / 100;
	// 	var totalValue = numVal1 - numVal1 * numVal2;
	// 	document.getElementById('total').value = totalValue.toFixed(2);
	// };

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		// console.log(formData);
		setFormData({ ...formData, [name]: value });

		console.log(formData);
	};

	const handleCategoryChange = (event) => {
		const newIndex = event.target.selectedIndex;
		setSelectedCategoryIndex(newIndex);
		setSelectedSubcategoryIndex(0); // Reset subcategory index when category changes
	};

	const handleSubcategoryChange = (event) => {
		const newIndex = event.target.selectedIndex;
		setSelectedSubcategoryIndex(newIndex);
	};

	return (
		<div className=' p-20   '>
			<div>
				<h3 className='mb-10 font-bold text-3xl tracking-wide text-center'>
					Add Product
				</h3>

				<form onSubmit={handleSubmit} id='myForm' encType='multipart/form-data'>
					{' '}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 '>
						<div className='form-control mb-3'>
							<label className='mb-2  text-xl'>Product Name</label>
							<input
								autoComplete='off'
								onChange={handleInputChange}
								type='text'
								name='name'
								required
								className='input input-bordered w-full max-w-xs'
								placeholder='Enter Your Product name'
							/>
						</div>
						<div className='form-control mb-3'>
							<label className='mb-2 text-xl'>Stock Product Quantity</label>
							<input
								autoComplete='off'
								onChange={handleInputChange}
								type='number'
								name='stock'
								required
								className='input input-bordered w-full max-w-xs'
								placeholder='quantity'
							/>
						</div>
						<div className='form-control mb-3'>
							<label className='mb-2 text-xl'>Product Pin</label>
							<input
								autoComplete='off'
								onChange={handleInputChange}
								type='quantity'
								name='productPin'
								required
								className='input input-bordered w-full max-w-xs'
								placeholder='product pin'
							/>
						</div>
						<div className='form-control mb-3 min-w-full'>
							<label className='mb-2 text-xl'>Pricing</label>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
								<label htmlFor='price'>Regular Price</label>
								<input
									autoComplete='off'
									onChange={handleInputChange}
									type='number'
									name='oldPrice'
									id='price'
									required
									className='input input-bordered w-full max-w-xs mb-3'
									placeholder='old price'
								/>
								<br />
								<label htmlFor='discount'>Percentage</label>
								<input
									autoComplete='off'
									onChange={(e) => {
										handleInputChange(e);
										handleDiscount(e);
									}}
									type='number'
									name='offerPercentage'
									id='discount'
									className='input input-bordered w-full max-w-xs mb-3'
									placeholder='offer (%)'
								/>
								<br />

								{/* <button onClick={getPrice} className='btn'>
									Get offer price:{' '}
								</button> */}
								<label htmlFor='discountPrice'>Discount Price</label>
								<input
									autoComplete='off'
									onChange={(e) => {
										handleInputChange(e);
										handleDiscount(e);
									}}
									type='number'
									name='discountPrice'
									id='discountPrice'
									className='input input-bordered w-full  mb-3'
									placeholder='discount price'
								/>
								<br />
								<input
									autoComplete='off'
									onChange={(e) => {
										handleInputChange(e);
									}}
									type='number'
									name='offerPrice'
									disabled
									value={formData?.offerPrice}
									id='total'
									className='input input-bordered w-full  mb-3'
									placeholder='new price'
								/>
							</div>
						</div>
						<div className='form-control mb-3'>
							<label className='mb-2 text-xl'>Brand</label>
							<input
								autoComplete='off'
								onChange={handleInputChange}
								className='input input-bordered w-full max-w-xs'
								name='brand'
								required
								type='text'
								placeholder='brand'
							></input>
						</div>
						<div className='form-group mb-3'>
							<label className='mb-2 '>Category</label>
							<select
								autoComplete='off'
								required
								onChange={(e) => {
									handleCategoryChange(e);
									handleInputChange(e);
								}}
								className='form-control'
								type='text'
								name='category'
							>
								<option> Select Category</option>
								{categoryData.map((item, idx) => (
									<option key={idx} value={item.category}>
										{item.category}
									</option>
								))}
							</select>
						</div>
						<div className='form-group mb-3'>
							<label htmlFor='subcategory' className='mb-2 '>
								Subcategory
							</label>

							{/* <select
								onChange={(e) => {
									handleSubcategoryChange(e);
									handleInputChange(e);
								}}
								className='form-control'
								type='text'
								name='subcategory'
							>
								<option value='' disabled>
									Choose subcategory
								</option>

								{categoryData[selectedCategoryIndex]?.subCategory?.map(
									(item, idx) => (
										<option key={idx} value={item}>
											{item}
										</option>
									)
								)}
							</select> */}
							<input
								onChange={handleInputChange}
								type='text'
								name='subcategory'
								id='subcategory'
								placeholder='subCategory'
								className='input input-bordered w-full max-w-xs'
							/>
						</div>

						<div className=' mb-3   '>
							<label className='mb-2 text-xl mr-10 '>New Arrival</label>

							<input
								autoComplete='off'
								onChange={handleInputChange}
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600   mt-5'
								type='checkbox'
								name='newArrival'
							></input>

							<label
								htmlFor='default-checkbox'
								className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
							>
								New product
							</label>
						</div>
						<div className='form-control my-4'>
							<label className='mb-2 text-xl'>Image</label> <br />
							<input
								autoComplete='off'
								required
								type='file'
								name='images'
								accept='image/*'
								multiple
								onChange={handleImageChange}
								// onBlur={handleInputBlur}
							/>
						</div>

						<div className='form-control mb-3'>
							<label className='mb-2 text-xl'>Description</label>
							<textarea
								autoComplete='off'
								onChange={handleInputChange}
								className='input input-bordered w-full h-full'
								type='text'
								name='description'
								rows='10'
								required
							></textarea>
						</div>
					</div>
					<div className='text-center'>
						<button
							className='btn btn-dark border-0 rounded-3 my-5 text-2xl hover:btn-success hover:text-white capitalize'
							type='submit'
						>
							Add Product{' '}
							{loading ? <Loading /> : <SiMinutemailer className='ml-2 ' />}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AdminAddProducts;
