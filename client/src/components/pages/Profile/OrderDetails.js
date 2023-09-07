import React, { useEffect, useState, useRef } from "react";
// Adjust the import path
import { useParams } from "react-router-dom";
import Invoice from "../../Invoice/Invoice";

const OrderDetails = () => {
  const [orderData, setOrderData] = useState({});
  const { id } = useParams();
  const invoiceRef = useRef(null);

  useEffect(() => {
    getOrder();
  }, [id]);

  const getOrder = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER}/order/single/${id}`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      if (res.ok) {
        console.log(data);
        setOrderData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen mt-5">
      <div className="p-5">
        <h1 className="text-3xl m-5">Order Details</h1>{" "}
      </div>
      <div id="print">
        <Invoice order={orderData} />
      </div>
    </div>
  );
};

export default OrderDetails;
