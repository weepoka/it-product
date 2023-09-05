import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MdOutlineArrowRight } from 'react-icons/md';
import './SubNavbar.css';
import { FaGreaterThan } from 'react-icons/fa';
import CategoryFilter from '../../Home/Products/CategoryFilter';
import Desktop from './../../Home/CategoryProducts/Desktop/Desktop';
import { getCategories } from '../../../../ApiServices/ApiService';
// * categories list
// const categoryItems = [
//   "Mouse wired",
//   "Mouse wireless",
//   "Max ",
//   "Office Equipment",
//   "Accessories",
//   "Networking",
//   "PC Builder",
// ];
const SubNavbar = () => {
	const product = useLoaderData();

	const [category, setCategory] = useState([]);
	// category filter
	const [productCategoryItems, setProductCategoryItems] = useState(product);
	// console.log(productCategoryItems, "product items form header");
	//check category
	const categoryItemss = [
		'All',
		...new Set(product.map((card) => card.category)),
	];
	// console.log(categoryItems, "category names");
	const filter = (cat) => {
		if (cat === 'All') {
			setProductCategoryItems(product);
			return;
		}
		// console.log(cat, "category");
		setProductCategoryItems(product.filter((item) => item.category === cat));
	};

	useEffect(() => {
		getCategories(setCategory);
	}, []);

	return (
		<>
			<div className='shadow-lg sticky top-0 z-[99] bg-white'>
				<div className='navbar max-w-screen-2xl mx-auto m-[-10px] text-white  max-sm:hidden sm:hidden md:block '>
					<div className='flex z-10 text-gray-900 font-bold w-full justify-center'>
						<div className='dropdown'>
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-0 p-0 rounded w-52'
							>
								{/* //*dropdown menu started */}
								{/* {categoryItems.map((item, index) => (
                  <li
                    tabIndex={0}
                    key="index"
                    className="bg-white shadow-lg text-gray-900 z=[1000]"
                  >
                    <Link to="categoryItems" className="p-0, m-0">
                      <p className="flex justify-center items-center">
                        <span onClick={() => filter(item)}>{item}</span>
                        <span>
                          <MdOutlineArrowRight className="text-xl" />
                        </span>
                      </p>
                    </Link>
                    <ul className="w-full bg-white shadow-lg text-gray-900">
                      <li className="text-center">
                        <Link>Submenu 1</Link>
                      </li>
                      <li>
                        <Link>Submenu 2</Link>
                      </li>
                      <li>
                        <Link>Submenu 3</Link>
                      </li>
                    </ul>
                  </li>
                ))} */}
							</ul>
						</div>
						{/* product category list */}
						<div className='flex z-10' w-full>
							<div className='flex-none z-10' w-full>
								<ul className='menu menu-horizontal z-[500]'>
									{category?.map((item) => (
										<>
											<li tabIndex={0}>
												<Link to={`category/${item}`} className='p-0, m-0'>
													{item}
												</Link>
											</li>
										</>
									))}

									{/* <li tabIndex={0}>
                    <Link to="/laptop" className="p-0, m-0">
                      Keyboard and mouse
                    </Link>
                  </li>
                  <li tabIndex={0}>
                    <Link to="/security" className="p-0, m-0">
                      webcam
                    </Link>
                  </li>
                  <li tabIndex={0}>
                    <Link to="/officeEquipment" className="p-0, m-0">
                      Keyboard
                    </Link>
                  </li>
                  <li tabIndex={0}>
                    <Link to="/accessories" className="p-0, m-0">
                      Headset
                    </Link>
                  </li>
                  <li tabIndex={0}>
                    <Link to="/networking" className="p-0, m-0">
                      Speaker
                    </Link>
                  </li>
                  <li tabIndex={0}>
                    <Link to="/desktops" className="p-0, m-0">
                      GamePad
                    </Link>
                  </li>
                  <li tabIndex={0}>
                    <Link to="/desktops" className="p-0, m-0">
                      Gaming Simulation
                    </Link>
                  </li> */}
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* //* first div end */}

				{/* //* Hamburger menu div start */}
				<div className='navbar  bg-base-100  md:hidden '>
					{/* //! new dynamic line */}
					<div className='flex-none z-10' w-full>
						<div className='dropdown'>
							<label tabIndex={0} className=' btn-circle'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16M4 18h7'
									/>
								</svg>
							</label>
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
							>
								{/* //*dropdown menu started */}
								{category?.map((item, index) => (
									<li tabIndex={0} key='index' className='flex'>
										<Link to={`category/${item}`} className='p-0, m-0'>
											<p className='flex justify-center items-center'>
												<span onClick={() => filter(item)}>{item}</span>
												<span>
													<MdOutlineArrowRight className='text-xl' />
												</span>
											</p>
										</Link>
										<span className='dropHidden absolute left-[80%] '>
											{' '}
											<FaGreaterThan className='text-white' />
										</span>
										{/* <ul className="w-full bg-base-100 ">
                      <li className="text-center hover:bg-gray-500 hover:text-white">
                        <Link>Submenu 1</Link>
                      </li>
                      <li className="hover:bg-gray-500 hover:text-white">
                        <Link>Submenu 2</Link>
                      </li>
                      <li className="hover:bg-gray-500 hover:text-white">
                        <Link>Submenu 3</Link>
                      </li>
                    </ul> */}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SubNavbar;
