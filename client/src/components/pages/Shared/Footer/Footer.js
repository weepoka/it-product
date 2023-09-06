import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-gray-700">
      <div className="mt-10 bg-gray-700 text-white pt-10 px-10 md:px-0 lg:px-0 max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1   ">
          <div className="support flex justify-center md:justify-start">
            <div>
              <span className="text-base-200 tracking-widest font-bold">
                SUPPORT
              </span>
              <div className="my-5 w-[220px]">
                <div className="bg-gray-700 rounded-full py-4 px-2 flex mb-5 justify-center items-center support-contact-hover">
                  <p>
                    <FaPhoneAlt className="text-2xl text-white mx-2 " />
                  </p>
                  <p>
                    {" "}
                    <small className="text-gray-200">9am-7pm</small> <br />
                    <span className="text-md font-bold text-red">
                      +88 01774-003246
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer flex justify-center gap-28 md:justify-start">
            <div>
              <span className="text-base-200 tracking-widest font-bold">
                ABOUT US
              </span>
              <Link className="link link-hover footer-text">About us</Link>
              <Link className="link link-hover footer-text">Contact</Link>
              <Link className="link link-hover footer-text">Jobs</Link>
              <Link className="link link-hover footer-text">Press kit</Link>
            </div>
            <div>
              <span className="text-base-200 tracking-widest font-bold">
                LEGAL
              </span>
              <Link className="link link-hover footer-text">Terms of use</Link>
              <Link className="link link-hover footer-text">
                Privacy policy
              </Link>
              <Link className="link link-hover footer-text">Cookie policy</Link>
            </div>
          </div>
          <div className="flex justify-center flex-col md:justify-start items-center">
            <div className="p-10 md:p-0">
              <p className="text-base-200 tracking-widest font-bold text-center md:text-start mb-2">
                STAY CONNECTED
              </p>
              <h2 className="font-bold  text-white text-center md:text-start mb-2">
                Weepoka Ltd.
              </h2>
              <p className="footer-text text-center md:text-start mb-2">
                Head Office: Holy Garden, House#2/1, Road#2, Block#C Mirpur-2,
                Dhaka
              </p>
              <p className="footer-text text-blue-600 text-center md:text-start">
                <span className="font-bold ">Email:</span>{" "}
                <span className="text-white">weepoka.web@gmail.com</span>
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center mt-5">
              <p className="footer-social-icon  bg-gray-600 mx-2 hover:bg-blue-700 ">
                {" "}
                <FaFacebook className="text-3xl  cursor-pointer transition duration-100 hover:scale-150" />
              </p>
              <p className="footer-social-icon bg-gray-600 mx-2 hover:bg-red-700">
                <FaYoutube className="text-3xl   cursor-pointer transition duration-100 hover:scale-150" />
              </p>
              <p className="footer-social-icon bg-gray-600 mx-2 hover:bg-pink-700">
                {" "}
                <FaInstagram className="text-3xl  cursor-pointer transition duration-100 hover:scale-150" />
              </p>
            </div>
          </div>

          <div className="footer flex justify-center md:justify-start  ">
            <div className="w-full hidden md:block ">
              <iframe
                className="w-full h-[300px]"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58404.46327957972!2d90.34713004792027!3d23.808677547399466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755c11a5fb91d1f%3A0xf703ec5e2b01f5cc!2screw%20learning%20institute!3m2!1d23.8062273!2d90.35629019999999!5e0!3m2!1sen!2sbd!4v1669898898804!5m2!1sen!2sbd"
                allowFullScreen={true}
                loading="lazy"
                title="Crew Learning Institute"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className=" bg-gray-700  text-white pb-2  copyright">
          <div className="flex justify-center md:justify-start">
            {/* <hr className="text-base-200 hr-color" /> */}
            <p className="mt-3">
              <small>
                Copyright © 2022 - All right reserved by ACME IT Ltd.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
