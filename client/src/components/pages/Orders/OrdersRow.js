import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaBeer, TbCurrencyTaka } from "react-icons/tb";
const OrdersRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, productName, phone, price, customer, email, product, status } =
    order;

  //getting service all details
  const [orderProducts, setOrderProducts] = useState({});
  console.log(orderProducts.image);
  //data load for all image same as checkout
  useEffect(() => {
    fetch(`https://weepoka.vercel.app/products/${product}`)
      .then((res) => res.json())
      .then((data) => setOrderProducts(data));
  }, [product]);
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-outline"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-24 rounded">
              {orderProducts?.image && (
                <img
                  src={orderProducts.image}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div className="ml-3">
            <div>
              <p className="text-xl"> {productName}</p>
            </div>

            <div>
              <p className="text-xl text-red-500 flex justify-center items-center">
                {" "}
                <span>
                  {" "}
                  <TbCurrencyTaka />
                </span>{" "}
                {price}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{customer}</div>
        <div className="text-sm opacity-50">{phone}</div>
      </td>
      <td>{email}</td>
      <th>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrdersRow;
