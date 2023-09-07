import React, { useState, useEffect, useContext } from "react";
// import deleteIcon from '../../Assets/Images/delete.png';
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";
import { ImCross } from "react-icons/im";
// import './Cart.css';
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/cartSlice";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import CheckOutModal from "../Checkout/CheckOutModal";
import Loading from "../Loading/Loading";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cartItems);
  const { profile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [grandTotal, setgrandTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [delivery, setDelevery] = useState(0);
  const [CART, setCART] = useState([]);
  const [order, setOrder] = useState({});
  const [detailState, setDetailState] = useState(false);
  const [cashOnDelivery, setCashOnDelivery] = useState(false);

  // const productsIds = products?.map((item) => item._id);
  // const productsNames = products?.map((item) => item.name);

  const productsCategoris = products?.map((item) => item.category);
  const checkOuteProducts = CART?.map((item) => {
    return {
      id: item._id,
      name: item.name,
      productPin: item.productPin,
      quantity: item.pdCount,
      image: item.image,
      price: item.offerPrice ? item.offerPrice : item.oldPrice,
    };
  });

  const handleCashOnDelivery = (e) => {
    setCashOnDelivery(e.target.checked);
  };

  const orderNow = async (e) => {
    e.preventDefault();
    setLoading(true);
    order.products = checkOuteProducts;
    order.userId = profile?._id;
    order.customer = profile?.name;
    order.email = profile?.email;
    order.price = grandTotal;
    order.categories = productsCategoris;
    // setLoading(true);
    console.log({ order });
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/order`, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(order),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        alert("Order completed");
        window.open(`/profile`, "_self");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const payOrder = async (e) => {
    setLoading(true);
    order.products = checkOuteProducts;
    order.userId = profile?._id;
    order.customer = profile?.name;
    order.email = profile?.email;
    order.price = grandTotal;
    order.categories = productsCategoris;
    // setLoading(true);
    console.log({ order });
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER}/payment/process`,
        {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(order),
          credentials: "include",
        }
      );
      const data = await res.json();
      if (res.ok) {
        window.open(data.gatewayURL, "_self");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCART(products);
  }, [products]);

  useEffect(() => {
    //! =====> Shiping Cost

    let deliveryPrice = 0;
    if (total > 10000) {
      deliveryPrice = 50;
    } else if (total > 100) {
      deliveryPrice = 80;
    }
    setDelevery(deliveryPrice);

    //! =====> Total Cost
    const totals =
      parseInt(
        CART.reduce((total, prd) => {
          if (prd.offerPrice) {
            return total + prd.offerPrice * prd.pdCount;
          }
          return total + prd.oldPrice * prd.pdCount;
        }, 0).toFixed(2)
      ) || 0;
    //! =====> VAT/Tax
    const taxx = (total / 10).toFixed(2);
    setTax(taxx);
    setTotal(totals);
    setgrandTotal((totals + Number(taxx) + deliveryPrice).toFixed(2));
  }, [CART, total]);
  //! =====> Remove product
  // const handleRemove = (pdId) => {
  //    dispatch(remove(pdId))
  // }

  //! ======> Remove product SWAL
  const handleRemove = (pdId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(remove(pdId));
        swal("Now! Your Selected product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Selected Product is safe!");
      }
    });
  };

  return (
    <div className="bg-gray-100 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {/* //! ====>All Cart Element*/}
        <div className="col-span-2 mt-10 mx-5">
          <div className=" mb-2 p-6 bg-white font-semibold text-black text-sm md:text-lg rounded shadow-md overflow-hidden md:w-full ">
            <div className="grid grid-cols-6 gap-14 sm:gap-10 ">
              <div>img</div>
              <div className="hidden sm:block">Name</div>
              <div>Qty</div>
              <div>Price</div>
              <div>SubTotal</div>
              <div className="pl-3 sm:pl-0">Delete</div>
            </div>
          </div>
          {CART?.map((cartItem, cartIndex) => (
            <div
              className=" mb-5 p-2 bg-white rounded shadow-md overflow-hidden md:w-full"
              key={cartItem._id}
            >
              <div className="grid grid-cols-6">
                <div className="md:shrink-0">
                  <img
                    className="object-cover h-[32px] w-[32px] sm:h-[50px] sm:w-[50px] md:w-[120px] md:h-[80px]"
                    src={cartItem.image}
                    alt="Modern building architecture"
                  />
                </div>
                <div className=" col-span-5 flex items-center justify-center ">
                  <p className="hidden sm:block pl-2 w-[13vh] uppercase tracking-wide text-sm text-black font-semibold">
                    {cartItem.name}
                  </p>
                  {/* //!====> Counting qty btn */}
                  <div className="w-[18vh] sm:mx-2 p-2 sm:p-3 flex justify-between items-center bg-gray-100 rounded text-black ">
                    <button
                      onClick={() => {
                        const _CART = CART.map((item, index) => {
                          return cartIndex === index
                            ? {
                                ...item,
                                pdCount:
                                  item.pdCount > 0 ? item.pdCount - 1 : 0,
                              }
                            : item;
                        });
                        setCART(_CART);
                      }}
                    >
                      {" "}
                      <HiOutlineMinus />{" "}
                    </button>

                    <span className="px-3 sm:px-3">{cartItem.pdCount}</span>
                    <button
                      onClick={() => {
                        const _CART = CART.map((item, index) => {
                          return cartIndex === index
                            ? { ...item, pdCount: Number(item.pdCount) + 1 }
                            : item;
                        });
                        setCART(_CART);
                      }}
                    >
                      {" "}
                      <HiOutlinePlus />{" "}
                    </button>
                  </div>
                  {/* //!====> Counting Price*/}
                  <div className="col-span-2 mx-1 w-[18vh] text-slate-700">
                    {cartItem.oldPrice}
                  </div>
                  {/* //!====> Counting SubTotal*/}
                  <div className="w-[18vh] mx-1 text-black font-semibold">
                    {(cartItem.oldPrice * cartItem.pdCount).toFixed(1)}
                  </div>
                  {/* //!====> Remove btn*/}
                  <button
                    onClick={() => handleRemove(cartItem)}
                    // onClick={() => handleRemove(cartItem._id)}
                    // className="p-3 w-[10vh] flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 transition duration-700"
                    className="p-3 w-[10vh] flex items-center font-semibold  "
                  >
                    {/* <img
                      className="h-6 mr-1"
                      src={deleteIcon}
                      alt="cart_logo"
                    /> */}
                    <ImCross className="hover:scale-150 duration-700 hover:fill-red-700 " />
                    {/* Remove */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* //! ====> Order Summary */}

        <div className="mt-10 mx-5 h-[52vh] md:h-[40vh] lg:h-[62vh] bg-white rounded shadow-md overflow-hidden ">
          <div className="rounded grid grid-rows-5 grid-flow-row justify-items-start ">
            <div className="bg-gray-100 w-full mt-2 rounded border-b-4 border-b-gray-200 ">
              <h2 className="p-2 text-lg lg:text-2xl font-bold ">
                Order Summary
              </h2>
            </div>
            <p className="font-semibold text-center text-lg p-2">
              Total Cost :<span className="pl-2"></span>
              {CART.map((item) => item.oldPrice * item.pdCount)
                .reduce((total, value) => total + value, 0)
                .toFixed(2)}
            </p>
            <p className="font-semibold text-center text-normal p-2">
              {" "}
              Delivery fee :<span className="pl-1"></span> {delivery}
            </p>
            <p className="mb-2 p-2 font-semibold text-center text-normal  ">
              {" "}
              VAT/Tax :<span className="pl-9"></span> {tax}
            </p>
            <div className="bg-gray-100 w-full rounded">
              <p className="my-2 p-1 font-bold text-lg lg:text-xl">
                Grand Total : {grandTotal}{" "}
              </p>
            </div>
            {/* //! ===========>Checkout Page <========== */}

            {detailState && (
              <div className="my-3 text-xl font-bold mx-2">
                <input
                  onChange={handleCashOnDelivery}
                  type="checkbox"
                  name="check"
                  id="check"
                />
                <label htmlFor="check">Cash On Delivery</label>
              </div>
            )}
            {detailState ? (
              <>
                {cashOnDelivery ? (
                  <div
                    onClick={orderNow}
                    className="mb-2 mt-3 py-3 w-full text-center bg-black rounded text-white font-4xl hover:bg-red-600 transition duration-700"
                  >
                    {loading ? <Loading /> : "Order Now"}
                  </div>
                ) : (
                  <div
                    onClick={payOrder}
                    className="mt-3 py-3 w-full text-center bg-black rounded text-white font-4xl hover:bg-red-600 transition duration-700"
                  >
                    <button type="button">
                      {loading ? <Loading /> : "Pay Order"}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="p-5 text-center">
                  <p className="text-red-500 font-bold p-3">
                    please add your delivery address to go farther step
                  </p>

                  <label htmlFor="my-modal-5" className="btn my-2">
                    Add Address Details
                  </label>
                </div>
              </>
            )}
          </div>
          <CheckOutModal
            user={profile}
            setOrder={setOrder}
            setDetailState={setDetailState}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
