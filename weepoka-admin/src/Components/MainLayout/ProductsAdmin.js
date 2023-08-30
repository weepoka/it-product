import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import update from '../../Assets/Images/update.png';
import im2 from '../../Assets/Images/delete.png';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';

const ProductsAdmin = () => {
	// ! ====> Add Product
	const [products, setProducts] = useState([]);
	// console.log(products);

	useEffect(() => {
		getProduct();
	}, []);

	const getProduct = async () => {
		let result = await fetch(
			`http://localhost:5000/api/v1/products/displayProducts`
		);
		result = await result.json();
		setProducts(result);
	};

	// ! ====> Delet Product
	const deleteProduct = (id) => {
		console.log('delet id', id);
		swal({
			title: 'Are you sure?',
			text: 'Once deleted, you will not be able to recover this product file!',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				fetch(`http://localhost:5000/deleteProduct/${id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then((result) => {
						if (result) {
							console.log('Deleted Successfully');
							getProduct();
						}
					});

				swal('Poof! Your product item has been deleted!', {
					icon: 'success',
				});
			} else {
				swal('Your product item is safe!');
			}
		});
	};
	// className="w-9/12"
	return (
		<div>
			<div className=' p-2 text-gray-500'>
				<div className='grid grid-cols-9 gap-4 mb-3'>
					<div className=' col-span-3 font-bold italic flex  items-center justify-center'>
						Product
					</div>
					<div className=' col-span-2 font-bold italic flex  items-center justify-center'>
						Description
					</div>
					<div className='font-bold italic flex  items-center justify-center'>
						Price
					</div>
					{/* <div className="font-bold italic flex  items-center justify-center">
            Stock
          </div> */}
					<div className='font-bold italic flex  items-center justify-center'>
						Quantity
					</div>
					<div className='font-bold italic flex  items-center justify-center'>
						Action
					</div>
				</div>
				<hr />
				{products.map((product) => (
					<div className='grid grid-cols-9 gap-4 py-2 ' key={product._id}>
						<div className=' col-span-3'>
							<div className=' flex  '>
								<div className='w-[50%] flex justify-center items-center'>
									{' '}
									<img className=' h-20' src={product.imageURL} alt='pic' />
								</div>
								<div className='w-[50%] text-left px-1'>
									<h2 className='font-semibold italic '> {product.name}</h2>
									<h2 className='font-semibold italic '> {product.brand}</h2>
								</div>
							</div>
						</div>
						<div className=' col-span-2 font-normal italic '>
							{product.description}
						</div>
						<div className='font-normal italic flex  items-start justify-center'>
							${product.price}
						</div>
						<div className='font-normal italic flex items-start justify-center'>
							{product.quantity}
						</div>
						{/* <div className="font-normal italic flex items-start justify-center">
              {product.stock}
            </div> */}
						<div className='flex items-start justify-evenly font-normal italic'>
							{/* //! =====> Update btn */}
							<NavLink
								to={`/update/${product._id}`}
								className='tooltip tooltip-left'
								data-tip='update !'
							>
								<img
									src={update}
									alt='icon'
									className='w-15 h-6'
									data-tip='update !'
								/>
							</NavLink>

							{/* //! =====> Delete btn */}
							<button
								type='button'
								className='tooltip tooltip-right'
								data-tip='delete !'
								onClick={() => deleteProduct(`${product._id}`)}
							>
								<img src={im2} alt='icon' className='w-6 h-6' />
							</button>
						</div>
						<hr />
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductsAdmin;
