import React, { useContext } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchProducts from './SearchProducts';

const SearchResults = () => {
    const{product}=useContext(AuthContext)
    const [products, setProducts] = useState(product);
    console.log(products)
    // const [searchParamsF] = useSearchParams();
    // const search =searchParamsF.get("search") === null ? "" : searchParamsF.get("search");
// console.log(search)

     // check name and search items 
  // useEffect(() => {
  //   filterSearchProducts();
  // }, []);

  // const filterSearchProducts = () => {
  //   // check minimum one entry occur
  //   if (search.length ) {
    

  //     // filter products with these conditions
  //     const filtered = products.filter((product) => {
        

  //       // search
  //       if (
  //         search.length > 0 &&
  //         !product.name.toLowerCase().includes(search.toLowerCase())
  //       ) {
  //         return false;
  //       }

  //       return true;
  //     });
  //     setProducts(filtered);
  //   }
  // };
    // const { _id, image, price, description,oldPrice, name } = products;
    return (
        <div className='max-w-screen-xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10'>
            
        {/* {
            products.map((product)=><SearchProducts key={product._id} product={product}></SearchProducts>)
        } */}
          </div>
        </div>
    );
};

export default SearchResults;