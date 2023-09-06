import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Invoice from '../../../pages/Profile/Invoice';

const AdminSingleOrder = () => {
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
		<div className='min-h-screen p-5'>
			<Invoice order={orderData} />
		</div>
	);
};

export default AdminSingleOrder;
