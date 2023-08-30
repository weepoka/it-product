import { React, useState } from 'react';
import CustomInput from './../CustomInput/CustomInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { Form } from 'react-router-dom';
import axios from 'axios';
const { Dragger } = Upload;
// const props = {
//   name: "file",
//   multiple: true,
//   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== "uploading") {
//       console.log(info.file, info.fileList);
//     }
//     if (status === "done") {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === "error") {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
//   onDrop(e) {
//     console.log("Dropped files", e.dataTransfer.files);
//   },
// };
const AddProduct = () => {
	const [formData, setFormData] = useState({});

	const [selectedImages, setSelectedImages] = useState([]);
	// const [previewImages, setPreviewImages] = useState([]);
	console.log(formData);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleImageChange = (e) => {
		const files = e.target.files;
		const imageList = [];

		// for (let i = 0; i < files.length; i++) {
		// 	const reader = new FileReader();
		// 	reader.onload = () => {
		// 		imageList.push(reader.result);

		// 		if (imageList.length === files.length) {
		// 			setPreviewImages(imageList);
		// 		}
		// 	};
		// 	reader.readAsDataURL(files[i]);
		// }

		setSelectedImages([...selectedImages, ...files]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formDataObj = new FormData();
		formDataObj.append('product', JSON.stringify(formData));
		selectedImages.forEach((image) => {
			formDataObj.append('images', image);
		});
		console.log(formDataObj);
		try {
			const response = await fetch('http://localhost:5000/api/v1/products', {
				method: 'POST',
				// headers: {
				// 	'Content-Type': 'multipart/form-data',
				// },
				body: formDataObj,
				credentials: 'include',
			});
			const data = await response.json();

			if (response.ok) {
				console.log('Data and images uploaded successfully');
				console.log(data);

				// Reset form and image state or perform other actions
			} else {
				console.error('Upload failed');
			}
		} catch (error) {
			console.error('Error uploading data and images:', error);
		}
	};
	return (
		<div className='m-5'>
			<h3 className='mb-4  title'>Add Product</h3>
			<div>
				<h3 className='mb-3'>Basic Information</h3>
				<form onSubmit={handleSubmit} encType='multipart/form-data'>
					<div className='form-group mb-3'>
						<label className='mb-2'>Product Name</label>
						<input
							required
							// onBlur={handleInputBlur}
							onChange={handleInputChange}
							type='text'
							name='name'
							className='form-control'
							placeholder='Enter Your Product name'
						/>
					</div>
					<div className='form-group mb-3'>
						<label className='mb-2'>Stock Product Quantity</label>
						<input
							onChange={handleInputChange}
							type='quantity'
							name='quantity'
							required
							className='form-control'
							placeholder='quantity'
						/>
					</div>
					<div className='form-group mb-3'>
						<label className='mb-2'>Pricing</label>
						<input
							onChange={handleInputChange}
							type='text'
							name='price'
							required
							className='form-control mb-3'
							placeholder='new price'
						/>
						<input
							required
							onChange={handleInputChange}
							type='text'
							name='oldPrice'
							className='form-control mb-3'
							placeholder='old price'
						/>
						<input
							required
							onChange={handleInputChange}
							type='text'
							name='offerPrice'
							className='form-control mb-3'
							placeholder='offer price(%)'
						/>
					</div>
					<div className='form-group mb-3'>
						<label className='mb-2'>Brand</label>
						<select
							required
							onChange={handleInputChange}
							className='form-control'
							name='brand'
							type='text'
						>
							<option value='' selected disabled hidden>
								Choose here
							</option>
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
							required
							onChange={handleInputChange}
							className='form-control'
							type='text'
							name='category'
						>
							<option value='' selected disabled hidden>
								Choose here
							</option>
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
							required
							type='file'
							name='images'
							accept='image/*'
							multiple
							onChange={handleImageChange}
							// onBlur={handleInputBlur}
						/>
					</div>
					{/* <div className="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple className="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> */}
					<div className='form-group mb-3'>
						<label className='mb-2'>Description</label>
						<textarea
							required
							onChange={handleInputChange}
							className='form-control'
							type='text'
							name='description'
							rows='3'
						></textarea>
					</div>
					<button
						className='btn btn-success border-0 rounded-3 my-5'
						type='submit'
					>
						Add Product
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
