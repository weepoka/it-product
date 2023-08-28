import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const UpdateProductAdmin = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [name, setName] = useState();
	const [brand, setBrand] = useState();
	const [price, setPrice] = useState();
	const [quantity, setQuantity] = useState();
	const [description, setDescription] = useState();
	const [imageUrl, setImageURL] = useState();

	useEffect(() => {
		getProductDetails();
	}, []);

	const getProductDetails = async () => {
		let result = await fetch(
			`http://localhost:5000/api/v1/getSingleProduct/${params.id}`
		);
		result = await result.json();
		console.log('This product get from DB', result);
		setName(result.name);
		setBrand(result.brand);
		setPrice(result.price);
		setQuantity(result.quantity);
		setDescription(result.description);
		setImageURL(result.imageUrl);
	};

	// * update data send to DB
	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(params);
		let result = await fetch(
			`http://localhost:5000/api/v1/products/${params.id}`,
			{
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify({
					name,
					brand,
					price,
					quantity,
					description,
					imageUrl,
				}),
			}
		);
		result = await result.json();
		console.log('Product info send to DB', result);
		if (result) {
			navigate('/admin');
		}
	};

	//* img update
	const handleImageupload = (e) => {
		const imageData = new FormData();
		imageData.set('key', '83678c89848905e49673e600dcf348fc');
		imageData.append('image', e.target.files[0]);
		axios.post('https://api.imgbb.com/1/upload', imageData).then((res) => {
			console.log(res.data.data.display_url);
			setImageURL(res.data.data.display_url);
		});
	};
	return (
		<div>
			<h3 className=' text-2xl text-slate-00 text-center font-semibold italic'>
				Update product
			</h3>

			<div className='mt-10 flex flex-col justify-center items-center'>
				<input
					type='text'
					placeholder='Product Name'
					value={name}
					name='name'
					className='input input-bordered focus:outline-none  w-full max-w-xs  border-slate-200 placeholder-slate-400 focus:ring focus:ring-sky-400 rounded '
					onChange={(e) => setName(e.target.value)}
					// onBlur={handleBlur}
				></input>
				<br />
				<input
					type='text'
					placeholder='Brand'
					value={brand}
					name='brand'
					className='input input-bordered focus:outline-none w-full max-w-xs  border-slate-200 placeholder-slate-400 focus:ring focus:ring-sky-400 rounded'
					onChange={(e) => setBrand(e.target.value)}
					// onBlur={handleBlur}
				></input>
				<br />
				<input
					type='text'
					placeholder='Price'
					value={price}
					name='price'
					className='input input-bordered focus:outline-none w-full max-w-xs border-slate-200 placeholder-slate-400 focus:ring focus:ring-sky-400 rounded  '
					onChange={(e) => setPrice(e.target.value)}
					// onBlur={handleBlur}
				></input>
				<br />
				<input
					type='tel'
					placeholder='Quantity'
					value={quantity}
					name='quantity'
					className='input input-bordered focus:outline-none w-full max-w-xs  border-slate-200 placeholder-slate-400 focus:ring focus:ring-sky-400 rounded'
					onChange={(e) => setQuantity(e.target.value)}
					// onBlur={handleBlur}
				></input>
				<br />
				<textarea
					className='input input-bordered textarea w-80 rounded focus:outline-none border-slate-200 placeholder-slate-400 focus:ring  focus:ring-sky-400 '
					placeholder='Description'
					value={description}
					name='description'
					onChange={(e) => setDescription(e.target.value)}
					// onBlur={handleBlur}
				></textarea>
				<br />
				<input
					type='file'
					className='file-input file-input-bordered file-input-info w-full max-w-xs'
					onChange={handleImageupload}
				/>
				<br />
				<button
					onClick={handleSubmit}
					type='submit'
					className='text-gray-900 bg-sky-400 hover:bg-sky-700 text-white hover:text-white focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2'
				>
					Update Product <FaPaperPlane className='ml-2 hover:fill-white ' />
				</button>
			</div>
		</div>
	);
};

export default UpdateProductAdmin;
