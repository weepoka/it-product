import React, { useState } from "react";

const CheckOutModal = ({ user, setOrder, setDetailState }) => {
  const { name, email } = user;
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [details, setDetails] = useState({});
  // const details = { ...user };

  const handleDetails = (e) => {
    e.preventDefault();
    console.log(details);

    if (!details.contactNumber) {
      return setError("please provide phone number");
    }
    if (!details.area) {
      return setError("please provide the area");
    }
    if (!details.address) {
      return setError("please provide your delivery address");
    }
    if (!details.city) {
      return setError("please provide your delivery city");
    }
    setDisabled(false);
    setOrder(details);
    setDetailState(true);
    alert("address added");
  };
  const inputChage = (e) => {
    setError("");
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
    console.log({ details });
    // if (
    // 	details.area &&
    // 	details.address &&
    // 	details.city &&
    // 	details.contactNumber
    // ) {
    // 	setDisabled(false);
    // }
  };

  return (
    <div className="bg-white">
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl" theme="light">
          <form className="mt-6" autoComplete="off" onSubmit={handleDetails}>
            {/*//!Name field */}
            <div className="relative pb-3">
              <input
                autoSave="off"
                autoComplete="off"
                defaultValue={name}
                onChange={inputChage}
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                type="text"
                name="name"
                placeholder="name"
                required
              />
            </div>

            {/*//!Email field */}
            <div className="relative">
              <input
                value={email}
                autoComplete="off"
                au
                // onChange={(e) => setEmail(e.target.value)}
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                type="email"
                name="email"
                disabled
                placeholder="email"
                required
              />
            </div>
            <div className="relative pt-3 flex">
              {/* //! phone number */}
              <input
                autoComplete="off"
                onChange={inputChage}
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                name="contactNumber"
                type="tel"
                placeholder="Phone Number"
                maxLength="11"
                required
              />
            </div>
            <div className="relative mt-3">
              {/*//!Password field */}
              <input
                autoComplete="off"
                onChange={inputChage}
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                type="text"
                name="address"
                placeholder="address"
                required
              />
            </div>
            <div className="relative mt-3">
              {/*//!Password field */}
              <input
                autoComplete="off"
                onChange={inputChage}
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                type="text"
                name="area"
                placeholder="area"
                required
              />
            </div>

            <div className="relative pt-3 flex">
              {/* //! phone number */}
              <input
                autoComplete="off"
                onChange={inputChage}
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                name="city"
                type="text"
                placeholder="city"
                maxLength="11"
                required
              />
            </div>
            <div className="text-red-500 my-2">
              <p>{error}</p>
            </div>
            <div className={`form-control mt-6 btn  `}>
              {disabled ? (
                <button onClick={handleDetails}>Add Details</button>
              ) : (
                <label typeof="submit" htmlFor="my-modal-5" className="btn ">
                  close
                </label>
              )}
            </div>
          </form>
          <div className="modal-action">
            <label typeof="submit" htmlFor="my-modal-5" className="btn ">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutModal;
