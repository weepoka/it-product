import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Order = ({ order }) => {
	return (
		<div>
			<div className='max-w-screen-2xl mx-auto px-5 md:px-0'>
				<div className='max-w-7xl mx-auto relative'>
					<Link to={`/order/${order?._id}`}>
						<button className='text-green-400 m-4'>Invoice</button>
					</Link>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
						<div className='flex justify-center'>
							{order?.products?.map((product) => (
								<>
									<img src={product.image} alt='' className='w-24 rounded-xl' />
								</>
							))}
						</div>
						<div className='grid grid-cols-2 md:grid-cols-3 gap-10 my-2 md:my-0'>
							<div>
								<h1 className='font-bold pb-1'>Product Name</h1>
								<p>
									{order?.products?.map((product) => (
										<>
											<p>{product?.name}</p>
										</>
									))}
								</p>
							</div>
							<div>
								<h1 className='font-bold pb-1'>Quantity</h1>
								<p>
									{' '}
									{order?.products?.map((product) => (
										<>
											<p>{product?.quantity}</p>
										</>
									))}
								</p>
							</div>
							<div>
								<h1 className='font-bold pb-1'>Price</h1>
								<p>{order?.price} Taka</p>
							</div>
						</div>
					</div>

					<div className='p-2'>
						<h3>
							Order <span className='text-blue-500'># {order?._id}</span>
						</h3>
						<small>Placed on {order?.updatedAt?.toLocaleString()}</small>
						<hr />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Order;
