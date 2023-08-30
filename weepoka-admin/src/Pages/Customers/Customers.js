import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
	},
	{
		title: 'Email',
		dataIndex: 'email',
	},
	{
		title: 'Mobile Number',
		dataIndex: 'contactNumber',
	},
	{
		title: 'Total Orders',
		dataIndex: 'orders',
	},
];
// const data = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     email: `wepooka.dev@gmail.com`,
//     mobile:`01685111860`,
//     orders: `${i+3}`,
//   });
// }

const Customers = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/api/v1/user', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		})
			.then((response) => response.json())
			.then((data) => {
				setData(data.data);
				console.log(data); // Assuming the API returns the user data as JSON
				// You can process the data here
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	return (
		<div className='m-5'>
			<h2>Customer List</h2>
			<div class='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom mb-3'></div>
			<div>
				<Table columns={columns} dataSource={data} />
			</div>
		</div>
	);
};

export default Customers;
