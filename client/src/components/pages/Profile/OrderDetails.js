import React, { useEffect, useState } from 'react';
import Invoice from './Invoice'; // Adjust the import path
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
	const [orderData, setOrderData] = useState({});
	const { id } = useParams();

	useEffect(() => {
		getOrder();
	}, [id]);

	const getOrder = async () => {
		try {
			const res = await fetch(
				`${process.env.REACT_APP_SERVER}/order/single/${id}`,
				{
					credentials: 'include',
				}
			);
			const data = await res.json();
			if (res.ok) {
				console.log(data);
				setOrderData(data.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='min-h-screen mt-5'>
			<h1 className='text-3xl m-5'>Order Details</h1>
			<Invoice order={orderData} />
		</div>
	);
};

export default OrderDetails;
