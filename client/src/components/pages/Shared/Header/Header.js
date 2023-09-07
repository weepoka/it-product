import React, { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import SubNavbar from "./SubNavbar";
import "./Header.css";
import { useContext } from "react";
import AuthProvider, { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import SearchProducts from "./SearchProduct/SearchProducts";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { remove } from "../../../Store/cartSlice";
import cart from "../../../../Assets/Images/shopping-cart.gif";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { Badge, Menu } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars";
import { logOut } from "../../../../ApiServices/auth";

const Header = () => {
  const items = useSelector((state) => state.cart.cartItems);
  const quantity = useSelector((state) => state.cart.cartQuantity);
  const total = useSelector((state) => state.cart.cartTotal).toFixed(2);
  // console.log("cart", items);
  // console.log("CartQuantity :", quantity);
  // console.log("total :", total);
  const dispatch = useDispatch();

  console.log("hello");

  const { profile, setProfile } = useContext(AuthContext);

  // const [products,setProducts]=useState([product]);

  const product = useLoaderData();
  // console.log(product)
  const [searchParamsF] = useSearchParams();
  const searchTerm =
    searchParamsF.get("search") === null ? "" : searchParamsF.get("search");
  // console.log(product)
  const { _id, name } = product;
  // console.log(name)
  const [value, setValue] = useState("");

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
    <div
      className=" py-0 mx-auto bg-gray-900 text-white"

      // style={{ backgroundColor: "#F6F6F6" }}
    >
      {/* //!========> top menu <=================*/}
      <div
        className="navbar max-w-screen-2xl mx-auto"
        // style={{ backgroundColor: "#F6F6F6" }}
      >
        <div className="navbar-start">
          <div className="">
            <Link to="/" className=" normal-case text-xl font-bold">
              Brand Logo
            </Link>
          </div>
        </div>
        {/* search bar */}
        <div className="search navbar-center ">
          <div className="search-container">
            <div className="search-inner ">
              <input
                type="text"
                name="search"
                value={value}
                onChange={onChange}
                className="md:w-[650px] w-80 px-4 py-2  rounded border-gray-400 shadow-input   relative"
              />
              <Link to={`/searchProduct`}>
                {" "}
                <button
                  className="px-4 py-2 rounded-xl absolute md:left-[61%] border-sky-400 font-bold text-gray-900"
                  onClick={() => onSearch(value)}
                  type="submit"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>{" "}
                </button>
              </Link>
            </div>
            <div className="dropdown1 md:w-[350px] mt-11">
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
                      className="dropdown-row"
                      key={item.name}
                    >
                      <div className="flex  ">
                        <img src={item.image} alt="" className="w-10 mr-3" />
                        <div className=" ml-3 font-bold">
                          {" "}
                          {item.name} <br />
                          <span className="text-red-300">{item.price}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div>
          <Link to="/profile">Profile</Link>
        </div>

        <div className="navbar-end ">
          {/* //! =======> todo New Code <======== */}
          <div>
            <Badge
              badgeContent={items.length}
              color="secondary"
              aria-controls={open ? "simple-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              style={{ padding: "3px 8px" }}
            >
              <HiShoppingCart className="cursor-pointer text-2xl hover:fill-red-700 duration-700 hover:scale-125" />
            </Badge>
            <Menu
              className="absolute"
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {items.length ? (
                <div className="max-w-md mx-auto p-2">
                  <AiOutlineClose
                    onClick={handleClose}
                    className="absolute top-2 right-2 fill-black hover:fill-red-600 hover:scale-125 duration-700 cursor-pointer"
                  />

                  <div className="mt-3">
                    <div>
                      <div className="flex font-bold text-md px-5 border-b-2 border-b-gray-900 pb-3">
                        <h2>Photo</h2>
                        <h2 className="pl-[40px]">Category Name</h2>
                      </div>
                      <div>
                        <Scrollbars style={{ width: 300, height: 350 }}>
                          {items.map((e) => {
                            return (
                              <>
                                <div className="flex p-5 border-b ">
                                  <div className="flex items-center justify-center ">
                                    <NavLink to="cart" onClick={handleClose}>
                                      <img
                                        className="w-14 h-14 object-contain"
                                        src={e.image}
                                        alt="pic"
                                      />
                                    </NavLink>
                                  </div>
                                  <div className="pl-10 w-full bg-slate-50 rounded ">
                                    <p className="font-semibold">
                                      {e.category}
                                    </p>
                                    <p>
                                      Price: <span className="text-sm">৳</span>{" "}
                                      {e.oldPrice}
                                    </p>
                                    <p className="gap-1 flex items-center">
                                      Ratting: 4.5{" "}
                                      <AiFillStar className="fill-amber-300" />
                                      <AiFillStar className="fill-amber-300" />
                                      <AiFillStar className="fill-amber-300" />
                                    </p>
                                  </div>
                                  <div>
                                    <p onClick={() => removePd(e._id)}>
                                      <AiTwotoneDelete className="fill-red-600 cursor-pointer text-xl" />
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
                  <p className="py-2 text-center text-xl font-semibold">
                    Total : {total}
                  </p>
                  <div className="">
                    <NavLink to="cart">
                      <button className="inline-block my-1 p-2 w-full bg-yellow-300 text-white duration-700 hover:bg-amber-400 hover:rounded-3xl">
                        View Cart
                      </button>
                    </NavLink>

                    <NavLink to="/">
                      <button className="p-2 w-full bg-cyan-300 text-white duration-700 hover:bg-cyan-400 hover:rounded-3xl">
                        Home
                      </button>
                    </NavLink>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center p-2">
                  <AiOutlineClose
                    onClick={handleClose}
                    className="absolute top-2 right-2 fill-black hover:fill-red-600 hover:scale-125 duration-700 cursor-pointer"
                  />
                  <p className="md:text-lg text-red-500 md:font-semibold">
                    Your Cart is Empty !
                  </p>
                  <img className="w-12 h-12 p-2" src={cart} alt="" />
                </div>
              )}
            </Menu>
          </div>

          {/* //! ========> Cart part End <======= */}

          <div className="dropdown dropdown-end z-[9999999]">
            <div>
              <Link tabIndex={0} className="  text-white mr-5">
                <div className="w-10 rounded-full">
                  <div>
                    {profile?.email ? (
                      <>
                        <p className="" onClick={handleLogOut}>
                          LogOut
                        </p>
                      </>
                    ) : (
                      <div className="mt-5 flex justify-center w-10">
                        <Link to="/login" className="bg-blue-500">
                          Login
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 z-30">
        {product
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
          ))}
      </div>
    </div>
  );
};

export default Header;
