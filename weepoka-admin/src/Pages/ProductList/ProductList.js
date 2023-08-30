import React, { useEffect, useState } from 'react';
import ProductListTable from './ProductListTable';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
import { Button } from 'antd';
const ProductList = () => {
	const [products, setProduct] = useState([]);
	// const {Description,category,name,new-price,quantity}=product

	//data fecthing
	useEffect(() => {
		fetch(`http://localhost:5000/api/v1/products/displayProducts`, {
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProduct(data.data);
			});
	}, []);

	return (
		<div>
			<h1>Product</h1>
			<div className='my-3'>
				<h2>Basic Information</h2>
			</div>

			<div>
				<table class='table table-hover'>
					<thead>
						<tr>
							<th scope='col'></th>
							<th scope='col'>Product name</th>
							<th scope='col'>New price</th>
							<th scope='col'>Old Price</th>
							<th scope='col'>Offer Price</th>
							<th scope='col'>Brand</th>
							<th scope='col'>Category</th>
							<th scope='col'>Edit</th>
							<th scope='col'>Delete</th>
						</tr>
					</thead>
					<tbody>
						{products?.map((product) => (
							<ProductListTable
								key={product._id}
								product={product}
							></ProductListTable>
						))}
					</tbody>
				</table>
			</div>
			{/* {
              products.map((product)=>(<ProductListTable key={product._id} product={product}></ProductListTable>) )
             } */}
			{/* { products.map((product) => (
          <ProductListTable key={product._id} product={product}></ProductListTable>
        ))} */}
		</div>
	);
};

export default ProductList;
