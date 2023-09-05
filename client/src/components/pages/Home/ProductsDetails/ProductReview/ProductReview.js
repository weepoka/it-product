import React from 'react';
import { Link } from 'react-router-dom';
import SingleProductDetials from '../SingleProductDetials';
import '../ProductMoreInfo/ProductMoreInfo.css'
const ProductReview = () => {
    return (
        <div >
            <SingleProductDetials></SingleProductDetials>
            <div className='max-w-screen-xl mx-auto'>
                <div className='specifications mt-3 mx-40 '>
                    <div className='p-3'>
                        <h2>Reveiw part done</h2>
                        <p>Please <Link> <span className='text-blue-700 font-bold'> Login</span></Link> If you want to see the product Review</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;