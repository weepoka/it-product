import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { logOut } from '../../../../ApiServices/auth';

const Sidebar = () => {
	const { profile } = useContext(AuthContext);

	const handleLogout = () => {
		logOut();
	};

	return (
		<div className=' p-3 space-y-2 md:w-96 min-h-screen    bg-gray-700 text-gray-100'>
			<div className='flex-col md:flex justify-center items-center  p-2 space-x-4'>
				<div className='flex justify-center items-center'>
					<img
						src={profile?.image}
						alt=''
						className='w-12 h-12 rounded-full dark:bg-gray-500 '
					/>
				</div>
				<div className=''>
					<h2 className='text-lg ml-2 font-semibold'>{profile?.name}</h2>
					<p className=' font-bold'>
						<Link
							to='/profile'
							className='text-xs hover:underline font-bold  dark:text-gray-400'
						>
							View profile
						</Link>
					</p>
				</div>
			</div>
			<div className='divide-y divide-gray-700'>
				<ul className='pt-2 pb-4 space-y-1 text-sm'>
					<li className='bg-gray-800 text-gray-50'>
						<Link
							to='dashboard'
							className='flex items-center p-2 space-x-3 rounded-md  hover:bg-gray-300 hover:text-gray-800 focus:shadow-outline'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
								className='w-5 h-5 fill-current dark:text-gray-400'
							>
								<path d='M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z'></path>
							</svg>
							<span>Dashboard</span>
						</Link>
					</li>

					<li>
						<Link
							to='adminOrders'
							className='flex items-center p-2 space-x-3 rounded-md  hover:bg-gray-300 hover:text-gray-800 focus:shadow-outline'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
								className='w-5 h-5 fill-current dark:text-gray-400'
							>
								<path d='M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z'></path>
								<path d='M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z'></path>
								<path d='M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z'></path>
							</svg>
							<span>Orders</span>
						</Link>
					</li>
					<li>
						<Link
							to='adminProducts'
							className='flex items-center p-2 space-x-3 rounded-md  hover:bg-gray-300 hover:text-gray-800 focus:shadow-outline'
						>
							<svg
								aria-hidden='true'
								className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
									clipRule='evenodd'
								></path>
							</svg>
							<span>Products</span>
						</Link>
					</li>
					<li>
						<Link
							to='adminAddProducts'
							className='flex items-center p-2 space-x-3 rounded-md  hover:bg-gray-300 hover:text-gray-800 focus:shadow-outline'
						>
							<svg
								aria-hidden='true'
								className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
									clipRule='evenodd'
								></path>
							</svg>
							<span>Add Product</span>
						</Link>
					</li>
					<li>
						<Link
							to='adminAddBanner'
							className='flex items-center p-2 space-x-3 rounded-md  hover:bg-gray-300 hover:text-gray-800 focus:shadow-outline'
						>
							<svg
								aria-hidden='true'
								className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
									clipRule='evenodd'
								></path>
							</svg>
							<span>Add Banner</span>
						</Link>
					</li>
					<li>
						<Link
							to='adminBanners'
							className='flex items-center p-2 space-x-3 rounded-md  hover:bg-gray-300 hover:text-gray-800 focus:shadow-outline'
						>
							<svg
								aria-hidden='true'
								className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
							</svg>

							<span>Banners</span>
						</Link>
					</li>
				</ul>
				<ul className='pt-4 pb-2 space-y-1 text-sm'>
					<li>
						<Link
							href='#'
							className='flex items-center p-2 space-x-3 rounded-md  hover:bg-gray-300 hover:text-gray-800 focus:shadow-outline'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
								className='w-5 h-5 fill-current dark:text-gray-400'
							>
								<path d='M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z'></path>
								<path d='M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z'></path>
							</svg>
							<span>Settings</span>
						</Link>
					</li>
					<li>
						<Link
							href='#'
							className='flex items-center p-2 space-x-3 rounded-md  hover:bg-gray-300 hover:text-gray-800 focus:shadow-outline'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
								className='w-5 h-5 fill-current dark:text-gray-400'
							>
								<path d='M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z'></path>
								<rect width='32' height='64' x='256' y='232'></rect>
							</svg>
							<button onClick={handleLogout}>Logout</button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
