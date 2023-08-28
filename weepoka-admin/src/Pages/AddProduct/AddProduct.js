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
	// const [desc, setDesc] = useState();
	// const handleDesc = (e) => {
	//   setDesc(e);
	// };

	const [product, setProduct] = useState({});
	const [image, setImage] = useState();
	const handleAddProduct = (event) => {
		event.preventDefault();
		console.log(product);

		fetch(`http://localhost:5000/api/v1/products`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ ...product, image }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					alert('Product added successfully');
					event.target.reset();
				}
			});
	};
	const handleInputBlur = (event) => {
		const field = event.target.name;
		const value = event.target.value;
		const newProduct = { ...product };
		newProduct[field] = value;
		setProduct(newProduct);
		console.log(value);
	};
	//* image upload to host site & get link
	const handleImageupload = (e) => {
		const imageData = new FormData();
		imageData.set('key', '83678c89848905e49673e600dcf348fc');
		imageData.append('image', e.target.files[0]);
		axios.post('https://api.imgbb.com/1/upload', imageData).then((res) => {
			console.log(res.data.data.display_url);
			setImage(res.data.data.display_url);
		});
	};
	return (
		<div className='m-5'>
			<h3 className='mb-4  title'>Add Product</h3>
			{/* <div>
        <form onSubmit={handleAddProduct}>
          <CustomInput onBlur={handleInputBlur} type="text" label="Enter Product Name"  name/>
          <div className="mb-3">
            <ReactQuill
              theme="snow"
             
              value={desc}
              onChange={(evt) => {
                handleDesc(evt);
              }}
            />
          </div>
          <CustomInput type="number" label="Enter Product Price" />
          <select name="" className="form-control py-3 mb-3" id="">
            <option value=""> Select Brand </option>
            <option value=""> Brand 2</option>
            <option value=""> Brand 3</option>
            <option value=""> Brand 4</option>
            <option value=""> Brand 5</option>
          
          </select>
          <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select Category</option>
            <option value=""> Category 1</option>
            <option value=""> Category 2</option>
            <option value=""> Category 3</option>
          </select>
          <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select Color</option>
          </select> 
         <div className="d-flex gap-3">
         <CustomInput type="number" label="Enter Recent Product Price" />
          <CustomInput type="number" label="Enter Old Product Price" />
          <CustomInput type="number" label="Enter Offer Product Price (%)" />
          
         </div>
         <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>  */}
			<div>
				<h3 className='mb-3'>Basic Information</h3>
				<form onSubmit={handleAddProduct}>
					<div className='form-group mb-3'>
						<label className='mb-2'>Product Name</label>
						<input
							onBlur={handleInputBlur}
							type='text'
							name='name'
							className='form-control'
							placeholder='Enter Your Product name'
						/>
					</div>
					<div className='form-group mb-3'>
						<label className='mb-2'>Stock Product Quantity</label>
						<input
							onBlur={handleInputBlur}
							type='quantity'
							name='quantity'
							className='form-control'
							placeholder='quantity'
						/>
					</div>
					<div className='form-group mb-3'>
						<label className='mb-2'>Pricing</label>
						<input
							onBlur={handleInputBlur}
							type='text'
							name='price'
							className='form-control mb-3'
							placeholder='new price'
						/>
						<input
							onBlur={handleInputBlur}
							type='text'
							name='oldPrice'
							className='form-control mb-3'
							placeholder='old price'
						/>
						<input
							onBlur={handleInputBlur}
							type='text'
							name='offerPrice'
							className='form-control mb-3'
							placeholder='offer price(%)'
						/>
					</div>
					<div className='form-group mb-3'>
						<label className='mb-2'>Brand</label>
						<select
							onBlur={handleInputBlur}
							className='form-control'
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
							onBlur={handleInputBlur}
							className='form-control'
							type='text'
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
							type='file'
							className='form-control-file'
							onChange={handleImageupload}
							name='image'
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
							onBlur={handleInputBlur}
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
