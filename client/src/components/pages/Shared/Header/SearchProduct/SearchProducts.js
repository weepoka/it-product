import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const SearchProducts = ({ searchProduct }) => {
  const { _id, image, price, description, oldPrice, name } = searchProduct;
  return (
    <div className="">
      <div
        className="img-wrapper card w-70 bg-base-100 border-2 hover:border-slate-400 hover:shadow-sky-800 card-hover"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
      >
        <figure className="p-0">
          <div className="">
            <img
              src={image}
              alt={name}
              className="rounded-2xl p-2 w-[280px] h-[240px] transition duration-400 hover:scale-150"
            />
            <div className="cart-hover-effect">
              <ul>
                <li className="">
                  <Link href="" className="">
                    {/* <img src={cartIcon} alt="" className="w-[30px]" /> */}
                    <FaShoppingCart className="text-2xl font-extrabold  hover:text-blue-800" />
                  </Link>
                </li>
                <li className="mt-3">
                  <Link>
                    {/* <img src={like} alt="" className="w-[30px]" /> */}
                    <FaHeart className="text-2xl hover:text-red-700  font-extrabold" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center p-0 mt-2">
          <h2 className="card-title tracking-wide capitalize font-bold">
            {name}
          </h2>
          <p> {description}</p>
          <div className="flex justify-center items-center">
            {" "}
            <span className="text-2xl font-bold">
              <TbCurrencyTaka />
            </span>{" "}
            <span className=" font-bold text-blue-600">{price}</span>
            <span className=" font-bold text-gray-600 old-price">
              {oldPrice}
            </span>
          </div>
          <div className="card-actions  my-2">
            <Link to={`/SingleProductDetails/${_id}`}>
              {" "}
              <button className="btn btn-sm bg-[#006FBA] hover:bg-white hover:text-primary">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProducts;
