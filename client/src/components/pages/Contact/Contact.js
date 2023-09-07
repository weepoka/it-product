import React from "react";
import { BsTelephone } from "react-icons/bs";
// import { LuMessagesSquare } from "react-icons/lu";

import { MdOutlineHomeWork, MdMessage } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      {" "}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d912.6663221242915!2d90.4128809696257!3d23.79493052576982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d23.7949!2d90.413663!4m5!1s0x3755c7c26c73a1eb%3A0xbfb1389ab274db6c!2sTaher%20Tower%20Shopping%20mall%2C%20Taher%20Tower%2C%2010%20DIT%20II%20Cir%2C%20Dhaka%201212!3m2!1d23.7949011!2d90.41364039999999!5e0!3m2!1sen!2sbd!4v1693919092597!5m2!1sen!2sbd"
          className="w-full h-[40vh]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="max-w-screen-2xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="md:text-5xl text-2xl  font-bold pb-5">Our Offices</h1>
          <p className="py-5">
            You will get all official Logitech products in Global IT Park..
          </p>
          <div className="">
            <div>
              <h1 className="text-xl font-bold pb-5">
                10 Taher Tower Shopping Center,Shop#219,(1st Floor),
                Gulshan-2,Dhaka-1212, Bangladesh
              </h1>
              <div className="py-2">
                <p className="flex items-center gap-2">
                  <BsTelephone /> 01764875977
                </p>
              </div>
              <div className="py-2">
                <p className="flex items-center gap-2">
                  <MdMessage /> Globalitpark2021@gmail.com
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2">
                  <MdOutlineHomeWork /> Gulshan-2,Dhaka-1212
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="text-black rounded">
            <form action="">
              <div className="flex items-center mb-10">
                <input
                  type="text"
                  name="twitter"
                  id="twitter"
                  placeholder="Name"
                  className="border-b-2
    border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none
     focus:border-green-400"
                />
              </div>

              <div className="flex items-center mb-10">
                <input
                  type="text"
                  name="twitter"
                  id="twitter"
                  placeholder="Write your Email"
                  className="border-b-2
    border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none
     focus:border-green-400"
                />
              </div>
              <div className="flex items-center mb-10">
                <textarea
                  type="text"
                  rows="5"
                  cols="60"
                  name="twitter"
                  id="twitter"
                  placeholder="Write your Message "
                  className="border-b-2
    border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none
     focus:border-green-400"
                />
              </div>
              <div className="text-right">
                <button className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
