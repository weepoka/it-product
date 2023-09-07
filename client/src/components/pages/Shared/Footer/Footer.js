import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import "./Footer.css";
import weero from "../../../../Assets/Images/weero.png";

const Footer = () => {
  return (
    <div className="bg-[#D7F0FC]">
      <div
        className="mt-10 bg-[#D7F0FC] text-black pt-10 px-10 md:px-0 lg:px-0 
      max-w-screen-2xl mx-auto"
      >
        <div className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1   ">
          <div className="support flex justify-center md:justify-start">
            <div>
              <span className="text-black tracking-widest font-bold">
                SUPPORT
              </span>
              <div className="my-5 w-[220px]">
                <div
                  className=" rounded-full border border-black py-4 px-2 flex mb-5 justify-center
                 items-center "
                >
                  <p>
                    <FaPhoneAlt className="text-2xl  mx-2 " />
                  </p>
                  <p>
                    {" "}
                    <small className="">9am-7pm</small> <br />
                    <span className="text-md font-bold ">+88 01764875977</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer flex justify-center gap-28 md:justify-start">
            <div>
              <span className="text-black tracking-widest font-bold">
                Information
              </span>
              <Link to="/" className="link link-hover footer-text">
                Home
              </Link>
              <Link to="/ContactUs" className="link link-hover footer-text">
                Contact Us
              </Link>
              <Link className="link link-hover footer-text">Jobs</Link>
              <Link className="link link-hover footer-text">Press kit</Link>
            </div>
            <div>
              <span className="text-black tracking-widest font-bold">
                LEGAL
              </span>
              <Link className="link link-hover footer-text">Terms of use</Link>
              <Link className="link link-hover footer-text">
                Privacy policy
              </Link>
              <Link className="link link-hover footer-text">Cookie policy</Link>
            </div>
          </div>
          <div className="flex  flex-col md:justify-start">
            <div className="p-10 md:p-0">
              <p className="text-black tracking-widest font-bold text-center md:text-start mb-2">
                STAY CONNECTED
              </p>
              <h2 className="font-bold  text-black text-center md:text-start mb-2">
                Global IT Park
              </h2>
              <p className="footer-text text-center md:text-start mb-2 text-black">
                10 Taher Tower Shopping Center,Shop#219,(1st Floor),
                Gulshan-2,Dhaka-1212., Dhaka, Bangladesh
              </p>
              <p className="footer-text text-black text-center md:text-start">
                <span className="font-bold text-black">Email:</span>{" "}
                <span className="text-black">Globalitpark2021@gmail.com</span>
              </p>
            </div>
            <div className="  mt-5">
              <p className="footer-social-icon   mx-2 hover:bg-blue-700 ">
                {" "}
                <a
                  target="_blank"
                  href="https://www.facebook.com/people/Global-It-Park/100093231437848/?mibextid=ZbWKwL"
                >
                  <FaFacebook className="text-3xl  cursor-pointer transition duration-100 hover:scale-150" />
                </a>
              </p>
            </div>
          </div>

          <div className="footer flex justify-center md:justify-start  ">
            <div className="w-full hidden md:block ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d912.6663221242915!2d90.4128809696257!3d23.79493052576982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d23.7949!2d90.413663!4m5!1s0x3755c7c26c73a1eb%3A0xbfb1389ab274db6c!2sTaher%20Tower%20Shopping%20mall%2C%20Taher%20Tower%2C%2010%20DIT%20II%20Cir%2C%20Dhaka%201212!3m2!1d23.7949011!2d90.41364039999999!5e0!3m2!1sen!2sbd!4v1693919092597!5m2!1sen!2sbd"
                className="w-full h-[300px]"
                allowfullscreen=""
                loading="lazy"
                title="Global It Park"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className=" bg-[#D7F0FC]  text-black pb-2  copyright  ">
          <div class="flex justify-center md:justify-start">
            <div class="text-center md:text-start weero mx-auto">
              <small class="flex items-center justify-center">
                <span>© 2023. Global It Park. All rights reserved.</span>
                <span class="font-bold font-serif ml-3">
                  <a href="https://weerodigital.com">Developed by</a>
                </span>
                <a href="https://weerodigital.com">
                  <img src={weero} alt="" class="w-20 drop-shadow-xl" />
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
