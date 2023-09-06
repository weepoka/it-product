import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams, useLoaderData } from 'react-router-dom';
import ProductsDetails from '../ProductsDetails/ProductsDetails';
import CategoryFilter from './CategoryFilter';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Products = () => {
	// const product = useLoaderData();
	const { product } = useContext(AuthContext);
	const [products, setProducts] = useState(product);
	const [cart, setCart] = useState([]);
	//price filtering
	// const [order, setOrder] = useState("ASC");

	//  price filtering
	//  const sorting = () => {
	//   if (order === "ASC") {
	//     const sorted = products.sort((a, b) => a.price - b.price);

	//     setProductCategory(sorted);
	//     setOrder("DSC");
	//   }
	// };

	// category filter
	const [productCategory, setProductCategory] = useState(product);
	// console.log(productCategory);
	//check category
	const cats = ['all', ...new Set(product.map((card) => card.category))];
	const filter = (cat) => {
		if (cat === 'all') {
			setProductCategory(product);
			return;
		}
		console.log(cat);
		setProductCategory(product.filter((item) => item.category === cat));
	};

	//for searching for products
	const [searchParams] = useSearchParams();
	//more product show

	console.log(searchParams);
	const [noOfElement, setNoOfElement] = useState(8);
	const loadMore = () => {
		setNoOfElement(noOfElement + noOfElement);
		console.log('click');
	};

	//  console.log(products);

	// console.log(`searchParams`, searchParams.get("min_price"));
	// console.log(`searchParams`, searchParams.get("max_price"));
	// console.log(`searchParams`, searchParams.get("search"));
	const min_price =
		searchParams.get('min_price') === null ? '' : searchParams.get('min_price');
	const max_price =
		searchParams.get('max_price') === null ? '' : searchParams.get('max_price');
	const search =
		searchParams.get('search') === null ? '' : searchParams.get('search');

	// check price and search items
	useEffect(() => {
		filterProducts();
	}, []);

	const filterProducts = () => {
		// check minimum one entry occur
		if (search.length || min_price.length || max_price.length) {
			const min = parseFloat(min_price);
			const max = parseFloat(max_price);

			// filter products with these conditions
			const filtered = productCategory.filter((product) => {
				// if min price > product price get product
				if (min > 0 && min > product.oldPrice) {
					return false;
				}

				// max price max price < product price get product
				if (max > 0 && max < product.oldPrice) {
					return false;
				}

				// search
				if (
					search.length > 0 &&
					!product.name.toLowerCase().includes(search.toLowerCase())
				) {
					return false;
				}

				return true;
			});
			setProductCategory(filtered);
		}
	};

	// filtering product

	const [selectedPrice, setSelectedPrice] = useState();

	const handleChange = (e) => {
		const { value } = e.target;
		console.log(e.target.value);

		setSelectedPrice(value);
	};
	const priceFilterList = () => {
		if (!selectedPrice) {
			return productCategory;
		}
		if (selectedPrice === 'Low') {
			return productCategory.sort((a, b) => a.oldPrice - b.oldPrice);
		}
		if (selectedPrice === 'High') {
			return productCategory.sort((a, b) => b.oldPrice - a.oldPrice);
		}
		if (selectedPrice === 'Offer') {
			return productCategory.filter((a) => a.offerPercentage);
		}
		if (selectedPrice === 'Newest') {
			return productCategory.filter((a) => a.newArrival);
		}
		return;
	};
	console.log({ selectedPrice }, { productCategory });
	console.log(priceFilterList());

	var filteredList = useMemo(priceFilterList, [selectedPrice, productCategory]);
	const slice = filteredList.slice(0, noOfElement);

	return (
		<div className=' py-10'>
			{/* [products] text*/}
			<div className='text-center mb-10'>
				<h2 className='text-4xl font-bold '>Featured Products</h2>
				<p className='mt-3'>Check & Get Your Desired Product!</p>
			</div>
			<div className='my-10 '>
				<div className='flex gap-10 items-center justify-between my-5 '>
					{/* category filter */}
					{/* <div>
            <h2 className="text-2xl ">Filter Category</h2>
            <CategoryFilter categories={cats} handleClick={filter} />
          </div> */}

					<div className='pt-3'>
						<h2 className='text-center  text-md'>
							Showing Products:{' '}
							<span className='text-blue-500 ml-2 font-bold text-md'>
								{slice.length}
							</span>
						</h2>
					</div>

					{/* price filtering */}
					<div className='flex justify-center items-center '>
						<label className='mb-0 font-bold text-xl'>Filter:</label>
						<div className='form-control ml-3  '>
							<select
								onChange={handleChange}
								className='input input-bordered w-full '
								type='text'
								required
								name='category'
							>
								<option value=''>Default</option>
								<option value='Low'>Low To high</option>
								<option value='High'>High To Low</option>
								<option value='Offer'>Offer</option>
								<option value='Newest'>Newest</option>
							</select>
						</div>
					</div>
				</div>
				<p className='border p-0 m-0 border-b-gray-300'></p>
			</div>

			{/* prodcuts images */}

			<div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10 '>
				{slice.map((product) => (
					<ProductsDetails
						key={product._id}
						product={product}
					></ProductsDetails>
				))}
			</div>
			<div className='text-center mt-5'>
				<button
					onClick={() => loadMore()}
					className='btn btn-sm btn-primary hover:bg-white hover:text-primary'
				>
					More products
				</button>
			</div>
			{/* pagination */}
			{/*
       <div className="container mx-auto px-4 py-10">
        <nav
          className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
          aria-label="Pagination"
        >
          <Link
            className="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
            href="#"
            title="Previous Page"
          >
            <span className="sr-only">Previous Page</span>
            <svg
              className="block w-4 h-4 fill-current"
              viewBox="0 0 256 512"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
            </svg>
          </Link>
          <Link
            className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
            href="#"
            title="Page 1"
          >
            1
          </Link>
          <Link
            className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
            href="#"
            title="Page 2"
          >
            2
          </Link>
          <Link
            className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-black bg-black text-white pointer-events-none"
            href="#"
            aria-current="page"
            title="Page 3"
          >
            3
          </Link>
          <Link
            className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
            href="#"
            title="Page 4"
          >
            4
          </Link>
          <Link
            className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
            href="#"
            title="Page 5"
          >
            5
          </Link>
          <Link
            className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
            href="#"
            title="Next Page"
          >
            <span className="sr-only">Next Page</span>
            <svg
              className="block w-4 h-4 fill-current"
              viewBox="0 0 256 512"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
            </svg>
          </Link>
        </nav>
      </div> */}
		</div>
	);
};

export default Products;
