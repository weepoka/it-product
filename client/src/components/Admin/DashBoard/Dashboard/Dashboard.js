import React, { useEffect, useState } from 'react';
import { Column } from '@ant-design/plots';

import { TbCurrencyTaka } from 'react-icons/tb';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
//for recent order table

const Dashboard = () => {
	//for chart of income
	const data = [
		{
			type: 'January',
			sales: 38,
		},
		{
			type: 'February',
			sales: 52,
		},
		{
			type: 'March',
			sales: 61,
		},
		{
			type: 'April',
			sales: 145,
		},
		{
			type: 'May',
			sales: 48,
		},
		{
			type: 'June',
			sales: 38,
		},
		{
			type: 'July',
			sales: 38,
		},
		{
			type: 'August',
			sales: 98,
		},
		{
			type: 'September',
			sales: 38,
		},
		{
			type: 'October',
			sales: 68,
		},
		{
			type: 'November',
			sales: 78,
		},
		{
			type: 'December',
			sales: 88,
		},
	];
	const config = {
		data,
		xField: 'type',
		yField: 'sales',
		// color: ({ type }) => {

		//     return #ffd333 ;
		// },
		label: {
			position: 'middle',
			// 'top', 'bottom', 'middle',

			style: {
				fill: '#FFFFFF',
				opacity: 0.6,
			},
		},
		xAxis: {
			label: {
				autoHide: true,
				autoRotate: false,
			},
		},
		meta: {
			type: {
				alias: 'Months',
			},
			sales: {
				alias: 'Income',
			},
		},
	};
	const [orders, setOrders] = useState([]);
	const [products, setProducts] = useState([]);
	//data fecthing
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER}/order`, {
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => {
				setOrders(data.data);
			});
	}, []);

	//data fecthing
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER}/products/displayProducts`, {
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProducts(data.data);
			});
	}, []);
	return (
		<div className='m-10 w-full shadow-lg border border-gray-500 p-5'>
			<h3 className='mb-10 text-3xl font-bold'>Dashboard</h3>

			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-10 gap-5'>
				<div
					style={{ backgroundColor: '#B4CDE6' }}
					className='card flex justify-between items-center w-full   flex-grow-1 p-3 rounded'
				>
					<div className=''>
						<p className='text-xl font-bold  mb-3'>Total Sells</p>
						<p className='flex items-center font-bold'>
							<span>
								<TbCurrencyTaka />
							</span>
							<span className='text-xl'>1000</span>
						</p>
					</div>
				</div>
				<div
					style={{ backgroundColor: '#CFF5E7' }}
					className=' card flex justify-between items-center w-full  flex-grow-1  p-3 rounde3'
				>
					<div>
						<p className='text-xl font-bold mb-3'>Total Products</p>
						<h4 className='mb-0 text-center text-xl font-bold'>
							{' '}
							{products.length}
						</h4>
					</div>
					{/* <div className="flex flex-column items-end">
                    <h6  className="red">
                    <BsArrowDownRight /> 32%
                    </h6>
                    <p className="mb-0  desc">Compared To April 2022</p>
                </div> */}
					{/* <div className="vr"></div> */}
				</div>
				{/* total orders */}
				<div
					style={{ backgroundColor: '#B9E0FF' }}
					className='card flex justify-between items-center w-full  flex-grow-1 p-3 rounded'
				>
					<div>
						<p className='desc text-xl font-bold mb-3'>Total Order</p>
						<h4 className='mb-0 text-center font-bold text-blue'>
							{' '}
							{orders?.length}
						</h4>
					</div>
					{/* <div className="flex flex-column items-end">
                    <h6  className="green">
                    <BsArrowDownRight /> 32%
                    </h6>
                    <p className="mb-0  desc">Compared To April 2022</p>
                </div> */}
				</div>
			</div>

			<div className='flex justify-between items-center gap-3'></div>
			<div className='flex justify-between flex-wrap  items-center pt-3 pb-2 mb-1 border-bottom my-3'></div>
			<div className='mt-10'>
				<h2 className='mb-6 text-3xl font-bold'>Income Statistics</h2>
				<div>
					<Column {...config} />
				</div>
			</div>
			<div className='flex justify-between flex-wrap table-auto items-center pt-3 pb-2 mb-1 border-bottom my-3'></div>
			<div className='mt-10 '>
				<h2 className='mb-4 text-3xl font-bold'>Recent Orders</h2>
				<div>
					{' '}
					<Table>
						<Thead>
							<Tr>
								<Th>Event</Th>
								<Th>Date</Th>
								<Th>Location</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Tablescon</Td>
								<Td>9 April 2019</Td>
								<Td>East Annex</Td>
							</Tr>
							<Tr>
								<Td>Capstone Data</Td>
								<Td>19 May 2019</Td>
								<Td>205 Gorgas</Td>
							</Tr>
							<Tr>
								<Td>Tuscaloosa D3</Td>
								<Td>29 June 2019</Td>
								<Td>Github</Td>
							</Tr>
						</Tbody>
					</Table>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default Dashboard;
