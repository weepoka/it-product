import React from "react";
import { Link } from "react-router-dom";
import "./Offer.css";
import Timer from "./Timer";
const Offer = () => {
  return (
    <div className="container py-10 max-w-screen-2xl mx-auto">
      {/* offer timer */}
      <div className="offerTimer">
        <div className="container">
          <h1 className="header">Last Date Of Offer Validity</h1>
          <Timer />
        </div>
      </div>
      {/* offer text  */}
      <div className="text-center mb-10 pt-16">
        <h2 className="text-4xl font-bold ">Exclusive Offers</h2>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          aliquam corporis mollitia <br /> aspernatur ratione quos natus quia
          nesciunt placeat distinctio?
        </p>
      </div>
      {/* offer images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        <div className="card offer-focus">
          <Link className="cursor-pointer ">
            <img
              className="rounded h-[200px] w-full"
              src="https://img.freepik.com/free-psd/3d-realistic-colorful-background-podium-product-display_125755-848.jpg"
              alt=""
            ></img>
          </Link>
        </div>
        <div className="card offer-focus">
          <Link className="cursor-pointer">
            <img
              className="rounded h-[200px] w-full"
              src="https://img.freepik.com/free-psd/colorful-discount-sale-podium_125755-675.jpg"
              alt=""
            ></img>
          </Link>
        </div>
        <div className="card offer-focus">
          <Link className="cursor-pointer">
            <img
              className="rounded h-[200px] w-full"
              src="https://img.freepik.com/free-vector/realistic-beauty-sale-banner-with-offer_52683-94987.jpg"
              alt=""
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
