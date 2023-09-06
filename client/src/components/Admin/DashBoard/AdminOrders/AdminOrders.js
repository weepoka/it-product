import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import AdminOrdersList from './AdminOrdersList';

const AdminOrders = () => {
	const [orders, setorders] = useState([]);
	// const {Description,category,name,new-price,quantity}=product

	//data fecthing
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER}/order`, {
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data.data);
				setorders(data.data);
			});
	}, []);
	return (
		<div className='px-14'>
			<h1 className='mt-20 mb-14 text-3xl font-bold text-center'>
				Orders Information
			</h1>

			<div>
				<Table className='table table-hover border border-gray-700'>
					<Thead className='py-5'>
						<Tr className=''>
							<Th className='px-20 py-5  font-bold text-sm  md:text-xl'>
								Product Code
							</Th>
							<Th className='px-20 py-5  font-bold text-sm  md:text-xl'>
								Product Name
							</Th>
							<Th className='px-10 font-bold text-sm md:text-xl'>Items</Th>
							<Th className='px-10 font-bold text-sm md:text-xl'>
								Customer Name
							</Th>
							<Th className='px-10 font-bold text-sm md:text-xl'>Mobile</Th>
							<Th className='px-10 font-bold text-sm md:text-xl'>paid</Th>
							<Th className='px-10 font-bold text-sm md:text-xl'>Status</Th>
							<Th className='px-10 font-bold text-sm md:text-xl'>Data</Th>
							<Th className='px-10 font-bold text-sm md:text-xl'>Total</Th>
							<Th className='px-10 font-bold text-sm md:text-xl'>Operation</Th>
						</Tr>
					</Thead>
					<tbody>
						{orders?.map((order) => (
							<AdminOrdersList key={order._id} order={order}></AdminOrdersList>
						))}
					</tbody>
				</Table>
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

export default AdminOrders;
