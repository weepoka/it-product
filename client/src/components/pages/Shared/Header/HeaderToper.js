import React, { useState } from 'react';
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import SearchProducts from './SearchProduct/SearchProducts';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { remove } from '../../../Store/cartSlice';
import cart from '../../../../Assets/Images/shopping-cart.gif';
import logo from '../../../../Assets/Images/brand.jpg';
import { HiShoppingCart } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { AiTwotoneDelete } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { Badge, Menu } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars';
import { logOut } from '../../../../ApiServices/auth';

const HeaderToper = () => {
	const items = useSelector((state) => state.cart.cartItems);
	// console.log("cart", items);

	const dispatch = useDispatch();

	const { profile, setProfile } = useContext(AuthContext);

	// const product = useLoaderData();
	const { product } = useContext(AuthContext);
	// console.log(product)
	const [searchParamsF] = useSearchParams();
	const searchTerm =
		searchParamsF.get('search') === null ? '' : searchParamsF.get('search');
	// console.log(product)
	const { _id, name } = product;
	// console.log(name)
	const [value, setValue] = useState('');

	//  console.log(value)
	const onChange = (event) => {
		setValue(event.target.value);
	};

	const onSearch = (searchTerm) => {
		setValue(searchTerm);
		// our api to fetch the search result
		// console.log("search ", searchTerm);
	};

	// console.log(value)

	const handleLogOut = () => {
		logOut();
		setProfile(null);
	};

	//!========> Popup menu item <=============
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	//! =======> Delet Product <=========
	const removePd = (id) => {
		dispatch(remove(id));
	};

	return (
		<div className='bg-gray-900 text-white py-1'>
			<div className='navbar max-w-screen-2xl mx-auto '>
				<div className='navbar-start'>
					<Link to='/' className='normal-case text-2xl font-bold'>
						<img src={logo} alt='' style={{ maxHeight: '60px' }} />
					</Link>
				</div>
				{/* Middle part */}
				<div className='navbar-start '>
					{/* search bar */}
					<div className='search1'>
						<div className='mb-3 xl:w-96 search-container'>
							<div className='input-group relative flex  items-stretch w-full  search-inner'>
								<input
									type='search'
									name='search'
									value={value}
									onChange={onChange}
									className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									placeholder='Search'
									aria-label='Search'
									aria-describedby='button-addon2'
								/>
								<Link to={`/searchProduct`}>
									<button
										className='btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center'
										type='button'
										onClick={() => onSearch(value)}
										id='button-addon2'
									>
										<svg
											aria-hidden='true'
											focusable='false'
											data-prefix='fas'
											data-icon='search'
											className='w-4'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 512 512'
										>
											<path
												fill='currentColor'
												d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
											></path>
										</svg>
									</button>
								</Link>
							</div>
						</div>
						<div className='dropdown1 md:w-[380px] mt-12'>
							{product
								.filter((item) => {
									const searchTerm = value.toLowerCase();
									const fullName = item.name.toLowerCase();

									return (
										searchTerm &&
										fullName.startsWith(searchTerm.toLowerCase()) &&
										fullName !== searchTerm
									);
								})
								.slice(0, 10)
								.map((item) => (
									<Link to={`/SingleProductDetails/${item._id}`}>
										<div
											onClick={() => onSearch(item.name)}
											className='dropdown1-row'
											key={item.name}
										>
											<div className='flex border-b border-b-gray-300 '>
												<img
													src={item.image}
													alt=''
													className='w-10 mr-3 ml-3 py-3'
												/>
												<div className=' ml-3 font-bold text-gray-900 py-3'>
													{' '}
													{item.name} <br />
													<span className='text-red-500 flex items-center'>
														<TbCurrencyTaka /> {item.oldPrice}
													</span>
												</div>
											</div>
										</div>
									</Link>
								))}
						</div>
					</div>
				</div>
				{/* !  profile */}
				<NavLink to='/profile'>
					{profile?._id && (
						<div className='flex flex-col mr-3'>
							{profile?.image ? (
								<img
									src={profile.image}
									className='max-w-[40px] rounded-full'
									alt='profile img'
									title='profile img'
								/>
							) : (
								<FaUserAlt className='text-white text-center text-xl items-center '></FaUserAlt>
							)}
							<NavLink to='/profile'>{profile?.name}</NavLink>
						</div>
					)}
				</NavLink>

				{profile?.isAdmin && profile?.role === 'admin' && (
					<div className='ml-4 bg-green-500 rounded p-2'>
						<NavLink to='/admin'>Dashboard</NavLink>
					</div>
				)}

				{/* Last Part */}
				<div className='navbar-end'>
					<div className='mr-5'>
						<Link
							to='/offer'
							className='relative px-5 py-2 font-medium text-white group'
						>
							<span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-red-500 group-hover:bg-red-700 group-hover:skew-x-12'></span>
							<span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-red-700 group-hover:bg-red-500 group-hover:-skew-x-12'></span>
							<span className='absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-red-600 -rotate-12'></span>
							<span className='absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-red-400 -rotate-12'></span>
							<span className='relative tracking-wide'>Latest Offers</span>
						</Link>
					</div>
					{/* <div className="dropdown dropdown-end mr-4 border-none">
            <label tabIndex={0} className="btn btn-ghost btn-circle ">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {items.length}
                </span>
              </div>
            </label>

            <div
              tabIndex={0}
              className="mt-3 mr-3  card card-compact dropdown-content w-52 bg-base-100 shadow border-none"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{items.length}</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <NavLink to="/cart">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div> */}

					{/* //! =======> todo New Code <======== */}
					<div className='z-[999999999]'>
						<Badge
							// badgeContent={quantity}
							badgeContent={items.length}
							color='secondary'
							aria-controls={open ? 'simple-menu' : undefined}
							aria-expanded={open ? 'true' : undefined}
							aria-haspopup='true'
							onClick={handleClick}
							style={{ padding: '3px 8px' }}
						>
							<HiShoppingCart className='cursor-pointer text-2xl hover:fill-red-700 duration-700 hover:scale-125' />
						</Badge>
						<Menu
							className='absolute'
							id='simple-menu'
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
							MenuListProps={{
								'aria-labelledby': 'basic-button',
							}}
						>
							{items.length ? (
								<div className='max-w-md mx-auto p-2'>
									<AiOutlineClose
										onClick={handleClose}
										className='absolute top-2 right-2 fill-black hover:fill-red-600 hover:scale-125 duration-700 cursor-pointer'
									/>

									<div className='mt-3'>
										<div>
											<div className='flex font-bold text-md px-5 border-b-2 border-b-gray-900 pb-3'>
												<h2>Photo</h2>
												<h2 className='pl-[40px]'>Category Name</h2>
											</div>
											<div>
												<Scrollbars style={{ width: 300, height: 350 }}>
													{items.map((e) => {
														return (
															<>
																<div className='flex items-center justify-center p-5 border-b '>
																	<div className='flex items-center justify-center '>
																		<NavLink to='cart' onClick={handleClose}>
																			<img
																				className='object-contain'
																				src={e.image}
																				alt='pic'
																			/>
																		</NavLink>
																	</div>
																	<div className='mx-5 sm:mr-0 px-2  w-full bg-slate-50 rounded '>
																		<p className='font-semibold'>{e.name}</p>
																		<p>
																			Price: <span className='text-sm'>৳</span>{' '}
																			{e.oldPrice}
																		</p>
																		<p className='gap-1 flex items-center'>
																			Ratting: 4.5{' '}
																			<AiFillStar className='fill-amber-300' />
																			<AiFillStar className='fill-amber-300' />
																			<AiFillStar className='fill-amber-300' />
																		</p>
																	</div>
																	<div>
																		<p
																			onClick={() => removePd(e)}
																			className='mr-5'
																		>
																			<AiTwotoneDelete className='fill-red-600 cursor-pointer text-xl' />
																		</p>
																	</div>
																</div>
															</>
														);
													})}
												</Scrollbars>
											</div>
										</div>
									</div>
									<p className='py-2 text-center text-xl font-semibold'>
										Total :{' '}
										{items
											.map((item) => item.oldPrice * (item.pdCount || 1))
											.reduce((total, value) => total + value, 0)
											.toFixed(2)}
									</p>
									<div className=''>
										<NavLink to='cart'>
											<button className='inline-block my-1 p-2 w-full bg-yellow-300 text-white duration-700 hover:bg-amber-400 hover:rounded-3xl'>
												View Cart
											</button>
										</NavLink>

										<NavLink to='/'>
											<button className='p-2 w-full bg-cyan-300 text-white duration-700 hover:bg-cyan-400 hover:rounded-3xl'>
												Home
											</button>
										</NavLink>
									</div>
								</div>
							) : (
								<div className='flex justify-between items-center p-2'>
									<AiOutlineClose
										onClick={handleClose}
										className='absolute top-2 right-2 fill-black hover:fill-red-600 hover:scale-125 duration-700 cursor-pointer'
									/>
									<p className='md:text-lg text-red-500 md:font-semibold'>
										Your Cart is Empty !
									</p>
									<img className='w-12 h-12 p-2' src={cart} alt='' />
								</div>
							)}
						</Menu>
					</div>

					{/* //! ========> Cart part End <======= */}

					<div className='dropdown dropdown-end'>
						<div>
							<Link tabIndex={0} className=' text-white mr-5'>
								<div className='w-10 rounded-full'>
									<div className=''>
										{profile?.email ? (
											<>
												<p onClick={handleLogOut} className='mt-5 mr-4 '>
													logout
												</p>
											</>
										) : (
											<div className='mt-5 flex justify-center w-10 z-[9999]'>
												<p className='flex justify-center items-center flex-col'>
													<Link to='/login' className='bg-blue-500'>
														Login
													</Link>
												</p>
											</div>
										)}
									</div>
								</div>
							</Link>
						</div>
						<ul
							tabIndex={0}
							className='menu menu-compact dropdown-content mt-0 p-2 z-[9999] shadow bg-slate-300 rounded-box w-52'
						>
							<li className='font-semibold mr-2 text-black'>
								<>
									{profile?.email ? (
										<>
											<p className=''>{profile?.name}</p>
											<button
												className='ms-2  '
												variant='light'
												onClick={handleLogOut}
											>
												Log Out
											</button>
										</>
									) : (
										<>
											<Link to='/login' className='bg-blue-500'>
												Login
											</Link>
										</>
									)}
								</>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* for showing search product */}
			<div className=' max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 z-30'>
				{/* {product
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const fullName = item.name.toLowerCase();

            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          })
          .map((searchProduct) => (
            <SearchProducts
              key={searchProduct._id}
              searchProduct={searchProduct}
            ></SearchProducts>
          ))} */}

				{/* for showing by default products */}

				{/* {product
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => (
            <SearchProducts key={val._id} searchProduct={val}></SearchProducts>
          ))} */}
			</div>
		</div>
	);
};

export default HeaderToper;
