import React from "react";
import ProductImageGalllery from "../../ProductImageGallery/ProductImageGalllery";

import Banner from "../Banner/Banner";
import BrandLogo from "../BrandLogo/BrandLogo";
import BrandPartner from "../BrandPartner/BrandPartner";
import Offer from "../Offer/Offer";
import Products from "../Products/Products";
import SingleProductDetials from "../ProductsDetails/SingleProductDetials";
import SearchProducts from "./../../Shared/Header/SearchProduct/SearchProducts";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* <SearchProducts></SearchProducts> */}
      <Banner></Banner>
      {/* <Offer></Offer> */}
      <BrandLogo></BrandLogo>
      <Products></Products>
      {/* <ProductImageGalllery></ProductImageGalllery> */}
      {/* <BrandPartner></BrandPartner> */}
    </div>
  );
};

export default Home;
