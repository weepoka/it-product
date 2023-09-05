import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { SiMinutemailer } from 'react-icons/si';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AdminUpdateProduct = () => {
	// const storedProduct = useLoaderData();
	const id = useParams();

	const [product, setProduct] = useState({});
	const [formData, setFormData] = useState({});
	const [selectedImages, setSelectedImages] = useState([]);

	const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
	const [selectedSubcategoryIndex, setSelectedSubcategoryIndex] = useState(0);

	const handleSubmit = async (e) => {
		e.preventDefault();
		let formDataObj = new FormData();
		if (selectedImages.length) {
			formDataObj.append('product', JSON.stringify(formData));
			selectedImages.forEach((image) => {
				formDataObj.append('images', image);
			});
		}

		console.log(formData);
		try {
			let response;
			if (selectedImages.length) {
				response = await fetch(
					`${process.env.REACT_APP_SERVER}/products/${product._id}`,
					{
						method: 'PUT',
						body: formDataObj,
						credentials: 'include',
					}
				);
			} else {
				response = await fetch(
					`${process.env.REACT_APP_SERVER}/products/${product._id}`,
					{
						method: 'PUT',
						headers: {
							'Content-Type': 'Application/json',
						},
						body: JSON.stringify(formData),
						credentials: 'include',
					}
				);
			}

			const data = await response.json();

			if (response.ok) {
				toast.success('successfully product added');

				return;

				// Reset form and image state or perform other actions
			} else {
				alert('Update failed');
				console.error('Update failed');
			}
		} catch (error) {
			console.error('Error uploading data and images:', error);
		}
	};

	const handleImageChange = (e) => {
		const files = e.target.files;
		const imageList = [];

		setSelectedImages([...selectedImages, ...files]);
	};
	//* image upload to host site & get link
	// const handleImage2Upload = (e) => {
	//   const imageData = new FormData();
	//   imageData.set("key", "83678c89848905e49673e600dcf348fc");
	//   imageData.append("image", e.target.files[0]);
	//   axios.post("https://api.imgbb.com/1/upload", imageData).then((res) => {
	//     console.log(res.data.data.display_url);
	//     setImage2(res.data.data.display_url);
	//   });
	// };

	//offer price calculation
	const getPrice = (e) => {
		e.preventDefault();
		var numVal1 = Number(document.getElementById('price').value);
		var numVal2 = Number(document.getElementById('discount').value) / 100;
		var totalValue = numVal1 - numVal1 * numVal2;
		document.getElementById('total').value = totalValue.toFixed(2);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// const handleCategoryChange = (event) => {
	//   const newIndex = event.target.selectedIndex;
	//   setSelectedCategoryIndex(newIndex);
	//   setSelectedSubcategoryIndex(0); // Reset subcategory index when category changes
	// };

	// const handleSubcategoryChange = (event) => {
	//   const newIndex = event.target.selectedIndex;
	//   setSelectedSubcategoryIndex(newIndex);
	// };

	useEffect(() => {
		const getSingleProduct = async () => {
			try {
				const res = await fetch(
					`${process.env.REACT_APP_SERVER}/products/${id?.id}`
				);
				const data = await res.json();
				console.log(data);
				if (res.ok) {
					setProduct(data);
				}
				// console.log(res);
			} catch (error) {
				console.log(error);
			}
		};
		getSingleProduct();
	}, [id?.id]);
	return (
		<div className='p-20'>
			<Link to='/admin/adminProducts' className='font-bold '>
				<button
					type=''
					className='btn btn-outline capitalize text-xs md:text-xl mb-10 md:mb-0 '
				>
					<IoArrowBack />
					Goto Products
				</button>
			</Link>
			<h3 className='mb-14  font-bold text-2xl text-center'>Update Product</h3>

			<div className=''>
				<form onSubmit={handleSubmit} encType='multipart/form-data'>
					{' '}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 '>
						<div className='form-control mb-3'>
							<label className='mb-2  text-xl'>Product Name</label>
							<input
								defaultValue={product?.name}
								onChange={handleInputChange}
								type='text'
								name='name'
								className='input input-bordered w-full max-w-xs'
								placeholder='Enter Your Product name'
							/>
						</div>
						<div className='form-control mb-3'>
							<label className='mb-2 text-xl'>Stock Product Quantity</label>
							<input
								defaultValue={product?.quantity}
								onChange={handleInputChange}
								type='quantity'
								name='quantity'
								className='input input-bordered w-full max-w-xs'
								placeholder='quantity'
							/>
						</div>
						<div className='form-control mb-3'>
							<label className='mb-2 text-xl'>Pricing</label>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
								<input
									defaultValue={product?.oldPrice}
									onChange={handleInputChange}
									type='text'
									name='oldPrice'
									id='price'
									className='input input-bordered w-full max-w-xs mb-3'
									placeholder='old price'
								/>
								<input
									defaultValue={product?.offerPercentage}
									onChange={handleInputChange}
									type='text'
									name='offerPercentage'
									id='discount'
									className='input input-bordered w-full max-w-xs mb-3'
									placeholder='offer (%)'
								/>

								<button onClick={getPrice} className='btn'>
									Get offer price:{' '}
								</button>
								<input
									defaultValue={
										product?.oldPrice -
										(product?.offerPercentage / 100) * product?.oldPrice
									}
									onChange={handleInputChange}
									type='text'
									name='offerPrice'
									id='total'
									className='input input-bordered w-full  mb-3'
									placeholder='offer price(%)'
								/>
							</div>
						</div>
						<div className='form-control mb-3'>
							<label className='mb-2 text-xl'>Brand</label>
							<input
								defaultValue={product?.brand}
								onChange={handleInputChange}
								className='input input-bordered w-full max-w-xs'
								name='brand'
								type='text'
								placeholder='brand'
							></input>
						</div>
						<div className='form-group mb-3'>
							<label className='mb-2 '>Category</label>
							<input
								defaultValue={product?.category}
								onChange={handleInputChange}
								className='input input-bordered w-full max-w-xs'
								name='category'
								type='text'
								placeholder='category'
							></input>
						</div>
						<div className='form-group mb-3'>
							<label className='mb-2 '>Subcategory</label>

							<input
								defaultValue={product?.subcategory}
								onChange={handleInputChange}
								className='input input-bordered w-full max-w-xs'
								name='category'
								type='text'
								placeholder='subcategory'
							></input>
						</div>

						<div className=' mb-3   '>
							<label className='mb-2 text-xl mr-10 '>New Arrival</label>

							<input
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
								onChange={handleInputChange}
								className='input input-bordered w-full h-full'
								type='text'
								name='description'
								rows='10'
							></textarea>
						</div>
					</div>
					<div className='text-center'>
						<button
							className='btn btn-dark border-0 rounded-3 my-5 text-2xl hover:btn-success hover:text-white capitalize'
							type='submit'
						>
							Add Product <SiMinutemailer className='ml-2 ' />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AdminUpdateProduct;
