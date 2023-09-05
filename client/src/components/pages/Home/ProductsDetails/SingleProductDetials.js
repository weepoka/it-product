import React, { createContext, useContext, useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import "./SingleProductsDetails.css";
import ProductImageGalllery from "../../ProductImageGallery/ProductImageGalllery";
import { HashLink } from "react-router-hash-link";
// import { NavLink } from "react-router-dom";
import CartAmountToggle from "../../../Cart/CartAmountToggle";
import cart_logo from "../../../../Assets/Images/shopping-cart 1.png";
import { add } from "../../../Store/cartSlice";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

export const Calculate = createContext();

const SingleProductDetials = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { profile } = useContext(AuthContext);
  // console.log("SID -", id);
  const [product, setProduct] = useState({});
  const {
    _id,
    image,
    imageUrls,
    description,
    offerPercentage,
    offerPrice,
    oldPrice,
    stock,
    name,
  } = product;
  const [sliderImage, setSliderImage] = useState(image);

  const [pdCount, setPdCount] = useState(1);

  const getSingleProduct = async () => {
    let result = await fetch(`${process.env.REACT_APP_SERVER}/products/${id}`);
    result = await result.json();
    setProduct(result);
    // console.log("SingleProduct info : ", result);
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  console.log(product);
  // console.log("product-", product);
  // console.log(price);

  const handleClick = (image) => {
    // console.log(index);
    setSliderImage(image);
  };

  //! AddToCart
  const addToCart = (product) => {
    dispatch(add({ ...product, pdCount }));
    console.log("product item send to cart :", product);
  };

  //? Counting item
  const setDecrease = () => {
    pdCount > 1 ? setPdCount(pdCount - 1) : setPdCount(1);
  };

  const setIncrease = () => {
    pdCount < stock ? setPdCount(pdCount + 1) : setPdCount(stock);
  };

  return (
    <>
      <div className="font-medium py-5 relative max-w-screen-xl mx-auto">
        {/* ====> homepage Navigation */}
        <NavLink
          to="/"
          className="text-indigo-700 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-500 "
        >
          Home
        </NavLink>
        / {name}
      </div>

      <div className="mt-20 max-w-screen-2xl mx-auto">
        {/* Single Product information section */}
        <section className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 gap-5">
            {/* image section */}
            <div className="main">
              <div className="flex justify-center">
                <img
                  src={sliderImage ? sliderImage : image}
                  height="300"
                  width="500"
                  alt=""
                  className="rounded image-shadow"
                />
              </div>
              <div className="flex_row">
                {imageUrls?.map((data, i) => (
                  <div className="thumbnail" key={i}>
                    <img
                      // className={sliderData.id === i ? "clicked" : ""}
                      src={data}
                      onClick={() => handleClick(data)}
                      height="70"
                      width="100"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* single product description */}
            <div className="antialiased">
              <div className="mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
                  <div className="flex flex-col md:flex-row mx-4">
                    <div className="md:flex-1 px-4">
                      <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                        {name}
                      </h2>
                      <div className="flex mb-4">
                        <span className="flex items-center">
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 text-indigo-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 text-indigo-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 text-indigo-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 text-indigo-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 text-indigo-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <span className="text-gray-600 ml-3">20 Reviews</span>
                        </span>
                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                          <Link className="text-gray-500">
                            <svg
                              fill="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                          </Link>
                          <Link className="text-gray-500">
                            <svg
                              fill="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                          </Link>
                          <Link className="text-gray-500">
                            <svg
                              fill="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                          </Link>
                        </span>
                      </div>

                      <div className="flex items-center space-x-10 my-4">
                        <div className="flex">
                          {offerPrice ? (
                            <div className="rounded-lg bg-gray-100 flex py-2 px-3 mr-5">
                              <span className="mr-1 mt-1">
                                <TbCurrencyTaka />
                              </span>
                              <span className=" font-bold text-gray-600 text-3xl">
                                {" "}
                                {offerPrice}
                              </span>
                              <span className="badge badge-sm indicator-item text-md">
                                Save {offerPercentage}%
                              </span>
                            </div>
                          ) : (
                            <div className="rounded-lg  flex  mt-2 ">
                              <span className="mr-1 mt-1">
                                <TbCurrencyTaka />
                              </span>
                              <span className="  text-gray-700 text-xl text-center">
                                {" "}
                                {oldPrice}
                              </span>
                            </div>
                          )}
                        </div>
                        {offerPrice ? (
                          <div className="  flex  mt-2 ">
                            <span className="text-md mr-2 font-bold mb-3">
                              Regular Price:
                            </span>

                            <span className="line-through  text-gray-700 text-xl flex text-center">
                              <span className="mr-1 mt-1">
                                <TbCurrencyTaka />
                              </span>
                              <span className="text-xl"> {oldPrice}</span>
                            </span>
                          </div>
                        ) : (
                          <div className="  flex  mt-2 ">
                            <span className="text-md mr-2 font-bold mb-3">
                              Regular Price:
                            </span>

                            <span className="  text-gray-700 text-xl flex text-center">
                              <span className="mr-1 mt-1">
                                <TbCurrencyTaka />
                              </span>
                              <span className="text-xl"> {oldPrice}</span>
                            </span>
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="overflow-x-auto mt-5">
                          <table className="table table-compact w-full">
                            <thead>
                              <tr>
                                <th className="bg-white rounded-none tracking-widest">
                                  Key Features
                                </th>

                                <th className="bg-white rounded-none"></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-none">Cy Ganderton</td>
                                <td className="border-none">
                                  Quality Control Specialist
                                </td>
                              </tr>
                              <tr>
                                <td className="border-none">Hart Hagerty</td>
                                <td className="border-none">
                                  Desktop Support Technician
                                </td>
                              </tr>
                              <tr>
                                <td className="border-none">Brice Swyre</td>
                                <td className="border-none">Tax Accountant</td>
                              </tr>
                            </tbody>
                          </table>
                          <div id="view-more">
                            <HashLink
                              to="#view-more"
                              className="font-bold text-blue-700 decoration-sky-500"
                            >
                              View More Info
                            </HashLink>
                          </div>
                        </div>
                        <p className="text-gray-500">
                          <h2>{description}</h2>
                        </p>
                      </div>

                      <div className="flex py-4 space-x-10">
                        {/* <div className="relative w-50">
                      <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                          Qty
                        </div>
                        <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select> 

                         <svg
                          className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                          />
                        </svg> 
                      </div> */}

                        {/* <Link to={`/checkout/${_id}`}>
                      <button
                        type="button"
                        className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                      >
                        Add to Cart
                      </button></Link> */}
                        <div className="w-1/3">
                          {/* qtn count */}

                          <CartAmountToggle
                            count={pdCount}
                            setDecrease={setDecrease}
                            setIncrease={setIncrease}
                          />
                        </div>
                        {/*  Add to Cart btn  */}

                        {profile?.email ? (
                          <>
                            <button
                              onClick={() => addToCart(product)}
                              type="button"
                              className="p-3 flex items-center rounded bg-black text-white font-semibold hover:bg-red-500"
                            >
                              <img
                                className="w-8 mr-4"
                                src={cart_logo}
                                alt="cart_logo"
                              />
                              Add to Cart
                            </button>
                          </>
                        ) : (
                          <>
                            <p className=" text-red-500 font-bold">
                              Please login to access add to cart
                            </p>
                            <Link to="/login" className=" btn btn-warning">
                              Login
                            </Link>
                          </>
                        )}

                        {/* //! End code */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* details, Reviews */}
          </div>
          <section className="bg-gray-100  mt-20" id="view-more">
            <div className="py-10 max-w-screen-xl mx-auto">
              <div className="flex flex-col md:flex-row mx-4">
                <div className="mr-5">
                  {/* <Link to={`/ProductMoreInfoDetails/${id}`}
                activeClassName="selected"
                activeStyle={{ color: 'red' }}

              >
                <button className="btn btn-sm details-btn bg-white text-black border-none hover:bg-blue-700 hover:text-white rounded">Description</button>
              </Link> */}

                  <button className="details-btn bg-white text-black border-none hover:bg-blue-700 hover:text-white rounded">
                    {" "}
                    <NavLink
                      to={`/SingleProductDetails/ProductMoreInfoDetails/${_id}`}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-blue-700  font-bold btn btn-sm border-none rounded-none"
                          : "btn btn-sm details-btn bg-white text-black border-none hover:bg-blue-700 hover:text-white "
                      }
                    >
                      Description
                    </NavLink>
                  </button>
                </div>
                <div>
                  <button className="details-btn bg-white text-black border-none hover:bg-blue-700 hover:text-white rounded">
                    {" "}
                    <NavLink
                      to={`/SingleProductDetails/ProductReview/${_id}`}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-blue-700  font-bold btn btn-sm border-none rounded-none"
                          : "btn btn-sm details-btn bg-white text-black border-none hover:bg-blue-700 hover:text-white "
                      }
                    >
                      Reviews (0)
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default SingleProductDetials;
