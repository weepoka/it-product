import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../../AuthProvider/AuthProvider";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const CheckOut = () => {
  //phone  number input code
  const [value, setValue] = useState();
  const items = useSelector((state) => state.items);
  console.log(items);

  const product = useLoaderData();
  console.log(product);
  const { _id, picture, description, price, name } = product;
  //getting user
  const { user } = useContext(AuthContext);

  //handle to submit product
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    //backend e pathanur jnne
    const CustomerName = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const address = form.address.value;
    console.log(phone);
    // for database pathanur jnne
    const order = {
      product: _id,
      productName: name,
      price,
      email,
      customer: CustomerName,
      phone,
      address,
    };
    //for validation

    if (phone.length < 10) {
      toast.error("Phone number should be 11 or longer");
      return;
    }

    //fetching  data from server side mongodb
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Order placed successfully");
          form.reset();
        }

        console.log(data);
      })
      .then((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <div className="text-center my-8">
          <h2 className="text-4xl my-3">
            You are about order : {items.length}
          </h2>
          <h4 className="text-3xl">Product Price : {items.price}</h4>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-secondary w-full "
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-secondary w-full"
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Your Phone"
            className="input input-bordered input-secondary w-full "
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Your email"
            defaultValue={user?.email}
            className="input input-bordered input-secondary w-full "
            readOnly
          />
        </div>
        <textarea
          name="address"
          className="textarea textarea-secondary h-24 w-full my-4"
          placeholder="Your address "
          required
        ></textarea>
        <input
          className="btn btn-outline"
          type="submit"
          value="Place your Order"
        />
      </form>
    </div>
  );
};

export default CheckOut;
