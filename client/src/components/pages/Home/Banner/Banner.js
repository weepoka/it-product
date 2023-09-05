import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import ProductFilter from '../ProductsDetails/ProductFilter';
import './Bannar.css';
import { Link } from 'react-router-dom';

import mega from '../../../../Assets/Images/OfferImage/499x220px__1.jpg';

const Banner = () => {
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		arrows: false,
		autoplaySpeed: 4000,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const [banners, setBanners] = useState([]);

	useEffect(() => {
		getBanners();
	}, []);

	const getBanners = async () => {
		try {
			const res = await fetch(`${process.env.REACT_APP_SERVER}/banner`, {
				credentials: 'include',
			});
			const data = await res.json();

			if (res.ok) {
				setBanners(data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='py-20  mx-auto'>
			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 '>
				{/* slider section */}
				<div className='col-span-2 p-3 lg:p-0 md:p-0 py-2'>
					<Slider {...settings} className=''>
						{banners.map((item, index) => (
							<div className='w-full' key={index}>
								<Link to='/offer'>
									<img
										src={item.image}
										className='w-full h-[500px]  rounded '
										alt=''
									/>
								</Link>
							</div>
						))}
						{/* <div className="w-full slider-shadow">
            <img
              src={img}
              className="w-full h-[500px]  rounded "
              alt=""
            />
          </div> */}
						{/* <div className="slider-shadow  w-full">
            <img
              src="https://img.freepik.com/free-psd/abstract-mega-sale-background_1393-397.jpg"
              className="w-full h-[500px] rounded"
              alt=""
            />
          </div>
          <div className="slider-shadow  w-full">
            <img
              src="https://img.freepik.com/free-psd/colorful-discount-sale-podium_125755-675.jpg"
              className="w-full h-[500px] rounded"
              alt=""
            />
          </div> */}
					</Slider>
				</div>
				{/* price selection */}
				<div className='col-span-1'>
					<ProductFilter></ProductFilter>

					<div className='py-2'>
						<Link to='/offer'>
							{' '}
							<img
								src={mega}
								alt=''
								className='mt-3 object-cover  w-full h-[220px] '
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
