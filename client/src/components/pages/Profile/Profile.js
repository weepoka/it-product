import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Order from './Order';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Profile = () => {
	// console.log(image);
	const { profile } = useContext(AuthContext);
	const [orders, setOrders] = useState([]);
	console.log(orders);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER}/order/${profile?._id}`, {
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => setOrders(data.data));
	}, [profile?._id]);

	return (
		<div>
			<div className='max-w-screen-2xl mx-auto px-5 md:px-0'>
				<div>
					<h1 className='text-2xl py-2 text-center font-bold'>My Profile</h1>
					<div className='grid grid-cols-1 md:grid-cols-5 gap-10 py-10'>
						<div className='col-span-2 flex justify-center items-center '>
							{profile?.image ? (
								<img src={profile.image} alt='' className='w-72 rounded-xl' />
							) : (
								<FaUserAlt className=' text-3xl' title='image' />
							)}
						</div>
						<div className='col-span-3'>
							<h1 className='font-bold text-center md:text-start'>
								Profile Details
							</h1>
							<div className='grid grid-cols-2 md:grid-cols-3  gap-10 py-3'>
								<div>
									<h2 className='font-bold'>Name </h2>
									<p className='pt-2'>{profile?.name}</p>
								</div>
								<div>
									<h2 className='font-bold'>
										Email{' '}
										<span className=' border-l text-blue-500 pl-1'>
											{' '}
											Change
										</span>
									</h2>
									<p className='pt-2'>{profile?.email}</p>
								</div>
								<div>
									<h2 className='font-bold'>
										Contact No{' '}
										<span className=' border-l text-blue-500 pl-1'>
											{' '}
											Change
										</span>
									</h2>
									<p className='pt-2'>{profile?.phone}</p>
								</div>
								<div>
									<h2 className='font-bold'>
										Address{' '}
										<span className=' border-l text-blue-500 pl-1'>
											{' '}
											Change
										</span>
									</h2>
									<p className='pt-2'>
										{profile?.phone ? profile?.phone : 'none'}
									</p>
								</div>
								<div>
									<h2 className='font-bold'>
										gender
										<span className=' border-l text-blue-500 pl-1'>
											{' '}
											Change
										</span>
									</h2>
									<p className='pt-2'>none</p>
								</div>
							</div>
							<div className='flex flex-col md:justify-start md:items-start items-center pt-10'>
								<button className='px-10 py-2 bg-blue-600 text-white'>
									<Link to={`/profile/${profile?._id}`}>Edit</Link>
								</button>
							</div>
						</div>
					</div>
					<div>
						<h1 className='text-center font-bold text-2xl'>My Order list</h1>
						<hr className=' my-5' />
					</div>
					{orders?.map((order) => (
						<Order order={order} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Profile;
