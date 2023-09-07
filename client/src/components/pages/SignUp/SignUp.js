import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaDatabase, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import login from "../../../Assets/Images/icon/login.svg";
import {
  facebookLogin,
  googleLogin,
  userRegister,
} from "../../../ApiServices/auth";
import { toast } from "react-hot-toast";
import Loading from "../../Loading/Loading";
const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  // const { createUser, updateUserProfile, verifyEMail } =
  //   useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/login";
  //create a state for terms and conditions
  const [accepted, setAccepted] = useState(false);
  const userInfo = {
    name,
    email,
    password,
    confirmPassword,
    phone: Number(phone),
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(userInfo);

    if (password !== confirmPassword) {
      return setError("confirm password does not match");
    }

    userRegister(userInfo, setError, toast, setSuccess, setLoading);
  };

  const handleFacebookSignIn = () => {
    facebookLogin();
  };
  const handleGoogleSignIn = () => {
    googleLogin();
  };

  const handleAccepted = (event) => {
    console.log(event.target.checked);
    setAccepted(event.target.checked);
  };

  return (
    <div className="my-20">
      <div className="">
        <div className="p-8 lg:w-1/2 mx-auto">
          <div className="bg-white rounded-t-lg p-8">
            <p className="text-center text-xl text-gray-700 font-bold">
              Sign in with
            </p>
            <div></div>
          </div>
          <div className="bg-gray-300 rounded-b-lg py-12 px-4 lg:px-24">
            <p className="text-center text-sm text-gray-500 font-light">
              Or sign in with credentials
            </p>
            {/* //* Form */}
            <form className="mt-6" onSubmit={handleSignUp}>
              {/*//!Name field */}
              <div className="relative pb-3">
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <FaUser
                    className="h-7 w-7 mb-3 ml-3 text-gray-400 p-1"
                    fill="currentColor"
                  />
                </div>
              </div>

              {/*//!Email field */}
              <div className="relative">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              <div className="relative mt-3">
                {/*//!Password field */}
                <input
                  onChange={(e) => setPassord(e.target.value)}
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                  </svg>
                </div>
              </div>
              <div className="relative mt-3">
                {/*//!Password field */}
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  required
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                  </svg>
                </div>
              </div>

              <div className="relative pt-3 flex">
                {/* //! phone number */}
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  maxLength="11"
                  required
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <BsFillTelephoneFill
                    className="h-7 w-7 mt-3 ml-3 text-gray-400 p-1"
                    fill="currentColor"
                  />
                </div>
              </div>
              <div className="form-control">
                <label
                  onClick={handleAccepted}
                  className="label cursor-pointer"
                >
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text">
                    <>
                      Accept <Link to="/terms">Terms and conditions</Link>
                    </>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  disabled={!accepted}
                  className="btn bg-[#006FBA]"
                >
                  {loading ? <Loading /> : "Sign Up"}
                </button>
                {/* <input
									type='submit'
									disabled={!accepted}
									className='btn btn-primary'
									value='Sing Up'
								/> */}
              </div>

              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-400 font-bold">{success}</p>}
            </form>

            <div className="mt-8">
              <span className="text-gray-500 mt-20 font-medium">
                Already have an account?
                <Link to="/login" className="text-blue-500">
                  {" "}
                  Login{" "}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

/*

 <div className="hero min-h-screen ">
          <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <img className="w-3/4" src={login} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 hover:shadow-violet-600 py-12">
              <h1 className="text-4xl text-center font-bold my-3">SignUp!</h1>
              <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone number</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="phone number"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="file"
                    name="photoURL"
                    placeholder="PhotoURL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label
                    onClick={handleAccepted}
                    className="label cursor-pointer"
                  >
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">
                      <>
                        Accept <Link to="/terms">Terms and conditions</Link>
                      </>
                    </span>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    disabled={!accepted}
                    className="btn btn-primary"
                    value="Sing Up"
                  />
                </div>
                <p className="text-red-600">{error}</p>
              </form>
  
              <p className="text-center">
                Al Ready have an Account
                <Link className="text-orange-600 font-bold ml-2" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>


*/
