import React from "react";
import OrderSucces from "../../../Assets/Images/orderSuccess.png";

const PaymentSuccess = () => {
  return (
    <div className="min-h-[600px] flex justify-center items-center">
      <img src={OrderSucces} className="md:max-w-[500px] w-[300px]" />
    </div>
  );
};

export default PaymentSuccess;
