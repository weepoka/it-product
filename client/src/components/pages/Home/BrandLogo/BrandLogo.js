import React from "react";
import "./BrandLogo.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import brandLogo1 from "../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (1).png";
import brandLogo2 from "../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (2).png";
import brandLogo3 from "../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (3).png";
import brandLogo4 from "../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (4).png";
import brandLogo5 from "../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (5).png";
import brandLogo6 from "../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (6).png";
import brandLogo7 from "../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (7).png";
import brandLogo8 from "../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (8).png";
import brandLogo9 from "../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (9).png";
import brandLogo10 from "../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (10).png";
import brandLogo11 from "../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (11).png";
import brandLogo12 from "../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (12).png";
import brandLogo13 from "../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (13).png";
// import brandLogo1 from '../../../../Assets/Images/BrandLogo/WD Tech LOGO-01 (14).png'
const BrandLogo = () => {
  var settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScrol: 6,
    initialSlide: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pt-8 max-w-screen-2xl mx-auto">
      <div className="divider"></div>

      <Slider {...settings}>
        <div className="brand-section ">
          <Link>
            <div className="flex justify-center ">
              <img src={brandLogo1} alt="" className=" " />
            </div>
          </Link>
        </div>
        <div className="brand-section ">
          <Link>
            <div className="flex justify-center hover:text-gray-600 ">
              <img src={brandLogo2} alt="" className=" " />
            </div>
          </Link>
        </div>
        <div className="brand-section ">
          <Link>
            <div className="flex justify-center ">
              <img src={brandLogo3} alt="" className=" " />
            </div>
          </Link>
        </div>
        <div className="brand-section ">
          <Link>
            <div className="flex justify-center ">
              <img src={brandLogo4} alt="" className=" " />
            </div>
          </Link>
        </div>
        <div className="brand-section ">
          <Link>
            <div className="flex justify-center ">
              <img src={brandLogo5} alt="" className=" " />
            </div>
          </Link>
        </div>
        <div className="brand-section ">
          <Link>
            <div className="flex justify-center ">
              <img src={brandLogo6} alt="" className=" " />
            </div>
          </Link>
        </div>
        <div className="brand-section ">
          <Link>
            <div className="flex justify-center ">
              <img src={brandLogo7} alt="" className=" " />
            </div>
          </Link>
        </div>
        <div className="brand-section ">
          <Link>
            <div className="flex justify-center ">
              <img src={brandLogo8} alt="" className=" " />
            </div>
          </Link>
        </div>
        <div className="brand-section ">
          <Link>
            <div className="flex justify-center ">
              <img src={brandLogo9} alt="" className=" " />
            </div>
          </Link>
        </div>
        <div className="brand-section ">
          <Link>
            <div className="flex justify-center ">
              <img src={brandLogo10} alt="" className=" " />
            </div>
          </Link>
        </div>
        <div className="brand-section ">
          <Link>
            <div className="flex justify-center ">
              <img src={brandLogo11} alt="" className=" " />
            </div>
          </Link>
        </div>
        <div className="brand-section ">
          <Link>
            <div className="flex justify-center ">
              <img src={brandLogo12} alt="" className=" " />
            </div>
          </Link>
        </div>
        <div className="brand-section ">
          <Link>
            <div className="flex justify-center ">
              <img src={brandLogo13} alt="" className=" " />
            </div>
          </Link>
        </div>
      </Slider>

      <div className="divider"></div>
    </div>
  );
};

export default BrandLogo;
