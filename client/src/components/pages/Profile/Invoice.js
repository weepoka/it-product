import React from 'react';

const Invoice = ({ order }) => {
	const handlePrint = () => {
		window.print();
	};
	return (
		<div className='bg-white p-8 rounded-lg shadow-lg '>
			<div className='flex justify-between flex-row-reverse'>
				<button
					onClick={handlePrint}
					className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
				>
					Print Invoice
				</button>
				<h2 className='text-2xl font-semibold mb-4'>Invoice</h2>
			</div>

			<div className='mb-4'>
				<p>
					<strong>Transaction ID:</strong> {order.transactionId}
				</p>
				<p>
					<strong>Order Date:</strong>{' '}
					{new Date(order.createdAt).toLocaleDateString()}
				</p>
			</div>
			<div className='mb-4'>
				<h3 className='text-lg font-semibold'>Customer Details</h3>
				<p>
					<strong>Name:</strong> {order?.user?.name}
				</p>
				<p>
					<strong>Contact Number:</strong> {order?.contactNumber}
				</p>
				<p>
					<strong>Address:</strong> {order?.address}, {order?.area},{' '}
					{order?.city}
				</p>
			</div>
			<div>
				<h3 className='text-lg font-semibold'>Products</h3>
				<table className='w-full mt-4'>
					<thead>
						<tr>
							<th className='text-left'>Name</th>
							<th className='text-left'>Quantity</th>
							<th className='text-left'>Price</th>
						</tr>
					</thead>
					<tbody>
						{order?.products?.map((product) => (
							<tr key={product.id}>
								<td className='text-left'>{product.name}</td>
								<td className='text-left'>{product.quantity}</td>
								<td className='text-left'>${product.price}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className='mt-6'>
				<p className='text-lg'>
					<strong>Total:</strong> ${order?.price}
				</p>
			</div>
		</div>
	);
};

export default Invoice;
