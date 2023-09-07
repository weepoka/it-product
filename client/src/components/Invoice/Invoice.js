import React, { useEffect, useState, useRef } from "react";

const Invoice = ({ order }) => {
  const invoiceRef = useRef(null);

  const handlePrint = () => {
    const printWindow = window.open("", "", "width=1000,height=1000");
    printWindow.document.open();
    printWindow.document.write("<html><head><title>Print</title></head><body>");
    printWindow.document.write('<div id="print">');
    printWindow.document.write(invoiceRef.current.innerHTML);
    printWindow.document.write("</div></body></html>");
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  };
  return (
    <div className="bg-white min-w-full p-8 rounded-lg shadow-lg ">
      <div className="text-right">
        <button
          onClick={handlePrint}
          className="mt-4 ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Print Invoice
        </button>
      </div>
      <div className="" id="print-section" ref={invoiceRef}>
        <div className="">
          <h2 className="text-2xl font-semibold mb-4">Invoice</h2>
        </div>

        <div className="mb-4">
          <p>
            <strong>
              {order?.transactionId ? "Transaction ID" : "Order ID"}:
            </strong>{" "}
            {order.transactionId ? order?.transactionId : order._id}
          </p>
          <p>
            <strong>Order Date:</strong>{" "}
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Customer Details</h3>
          <p>
            <strong>Name:</strong> {order?.user?.name}
          </p>
          <p>
            <strong>Contact Number:</strong> {order?.contactNumber}
          </p>
          <p>
            <strong>Address:</strong> {order?.address}, {order?.area},{" "}
            {order?.city}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Products</h3>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Quantity</th>
                <th className="text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {order?.products?.map((product) => (
                <tr key={product.id}>
                  <td className="text-left">{product.name}</td>
                  <td className="text-left">{product.quantity}</td>
                  <td className="text-left">${product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <p className="text-lg">
            <strong>Total:</strong> ${order?.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
