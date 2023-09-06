import Search from "antd/es/transfer/search";
import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import HeaderToper from "../pages/Shared/Header/HeaderToper";
import Searchjjjjjjjjj from "../pages/Shared/Header/Search/Searchjjjjjjjjj";
import SubNavbar from "../pages/Shared/Header/SubNavbar";
// import SubNavbar from "./../pages/Shared/Header/SubNavbar";

const Main = () => {
  return (
    <div className="">
      <HeaderToper></HeaderToper>
      {/* <Header></Header> */}
      {/* <Searchjjjjjjjjj></Searchjjjjjjjjj> */}
      <SubNavbar></SubNavbar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
