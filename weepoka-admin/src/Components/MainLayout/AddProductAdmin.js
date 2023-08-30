import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane } from 'react-icons/fa';

const AddProductAdmin = () => {
	const [name, setName] = useState();
	const [brand, setBrand] = useState();
	const [price, setPrice] = useState();
	const [quantity, setQuantity] = useState();
	const [description, setDescription] = useState();
	const [imageURL, setImageURL] = useState();
	console.log(process.env.SERVER_URL);

	// ! add product to DB
	const handleSubmit = async (e) => {
		e.preventDefault();

		let result = await fetch(`http://localhost:5000/api/v1/products`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				name,
				brand,
				price,
				quantity,
				description,
				imageURL,
			}),
		});
		document.getElementById('pd_form').value = '';
		result = await result.json();
		console.log(result);
	};

	//* image upload to host site & get link
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
			<h2 className='text-2xl text-slate-00 text-center font-semibold italic'>
				Add products Admin panel
			</h2>

			<div>
				<form
					id='pd_form'
					clasName='mt-10 flex flex-col justify-center items-center'
				>
					<input
						type='text'
						placeholder='Product Name'
						value={name}
						name='name'
						className='mb-2 input input-bordered w-full max-w-xs divide-y divide-slate-200 focus:outline-none border-slate-200 placeholder-slate-400 focus:ring focus:ring-sky-400 rounded'
						onChange={(e) => setName(e.target.value)}
						// onBlur={handleBlur}
					></input>
					<br />
					<input
						type='text'
						placeholder='Brand'
						value={brand}
						name='brand'
						className=' mb-2 input input-bordered w-full max-w-xs divide-y divide-slate-200 focus:outline-none border-slate-200 placeholder-slate-400 focus:ring focus:ring-sky-400 rounded'
						onChange={(e) => setBrand(e.target.value)}
						// onBlur={handleBlur}
					></input>
					<br />
					<input
						type='text'
						placeholder='Price'
						value={price}
						name='price'
						className='mb-2 input input-bordered w-full max-w-xs divide-y divide-slate-200 focus:outline-none border-slate-200 placeholder-slate-400 focus:ring focus:ring-sky-400 rounded'
						onChange={(e) => setPrice(e.target.value)}
						// onBlur={handleBlur}
					></input>
					<br />
					<input
						type='tel'
						placeholder='Quantity'
						value={quantity}
						name='quantity'
						className=' mb-2 input input-bordered w-full max-w-xs divide-y divide-slate-200 focus:outline-none border-slate-200 placeholder-slate-400 focus:ring focus:ring-sky-400 rounded'
						onChange={(e) => setQuantity(e.target.value)}
						// onBlur={handleBlur}
					></input>
					<br />
					<textarea
						className='mb-2 input input-bordered textarea w-80 rounded focus:outline-none border-slate-200 placeholder-slate-400 focus:ring  focus:ring-sky-400 '
						placeholder='Description'
						value={description}
						name='description'
						onChange={(e) => setDescription(e.target.value)}
						// onBlur={handleBlur}
					></textarea>
					<br />
					<input
						type='file'
						className='mb-2 file-input file-input-bordered file-input-info w-full max-w-xs rounded focus:outline-none border-slate-200 placeholder-slate-400 focus:ring  focus:ring-sky-400'
						onChange={handleImageupload}
					/>
					<br />
					<button
						onClick={handleSubmit}
						type='submit'
						className='text-gray-900 bg-sky-400 hover:bg-sky-700 text-white hover:text-white focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2'
					>
						Add Product <FaPaperPlane className='ml-2 hover:fill-white ' />
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddProductAdmin;
