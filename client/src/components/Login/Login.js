import {
	FacebookAuthProvider,
	getAuth,
	sendPasswordResetEmail,
} from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';

import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { facebookLogin, googleLogin, signIn } from '../../ApiServices/auth';
import app from '../Firebase/firebase.config';
import { toast } from 'react-hot-toast';
import Loading from '../Loading/Loading';

const Login = () => {
	const { setProfile } = useContext(AuthContext);

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const [user, setUser] = useState({}); //create for store getting email for reset
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	//facebook sign in
	const handleFacebookSignIn = () => {
		facebookLogin();
	};

	//google sign in
	const handleGoogleSignIn = () => {
		googleLogin();
	};

	//login part
	const handleLogin = async (event) => {
		console.log(user);
		event.preventDefault();
		setLoading(true);
		try {
			const res = await signIn(user);
			const data = await res.json();
			console.log(data);
			if (!res.ok) {
				setError(data.message);
			}
			if (res.ok) {
				navigate(from, { replace: true });
				toast.success('successfully logged in');
				setProfile(data.data.user);
			}
		} catch (error) {
			console.log(error);
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	//get email
	const handleInputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		user[name] = value;
	};
	//password reset
	//forget password
	const handleForgetPassword = () => {
		//if user don't use email but want change password
	};
	return (
		<div className='my-20'>
			<div className=''>
				<div className='p-8 lg:w-1/2 mx-auto'>
					<div className='bg-white rounded-t-lg p-8 '>
						<p className='text-center text-xl font-bold text-gray-700 '>
							Sign in with
						</p>
					</div>
					<div className='bg-gray-300 rounded-b-lg py-12 px-4 lg:px-20 '>
						<p className='text-center text-2xl text-gray-600 font-bold'>
							Login
						</p>
						{/* //* Form */}
						<Form className='mt-6' onSubmit={handleLogin}>
							<div className='relative '>
								{/*//!Email field */}
								<input
									onChange={handleInputChange}
									className='appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline'
									type='text'
									name='email'
									placeholder='Email'
									// className="input input-bordered"
									required
								/>
								<div className='absolute left-0 inset-y-0 flex items-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-7 w-7 ml-3 text-gray-400 p-1'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
										<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
									</svg>
								</div>
							</div>
							<div className='relative mt-3'>
								{/*//!Password field */}
								<input
									onChange={handleInputChange}
									className='appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline '
									type='text'
									name='password'
									placeholder='password'
									// className="input input-bordered"
									required
								/>
								<div className='absolute left-0 inset-y-0 flex items-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-7 w-7 ml-3 text-gray-400 p-1'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path d='M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z' />
									</svg>
								</div>
							</div>

							<div className='flex items-center justify-center my-5'>
								<button
									type='submit'
									disabled={loading}
									className='text-white py-2 w-full px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 
                  
                  '
								>
									{loading ? <Loading /> : 'Login'}
								</button>
								{/* <input
									type='submit'
									className='text-white py-2 w-full px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 
                  
                    '
									value='Login'
								/> */}
							</div>
							<div>
								<div>
									<p className='text-red-600'>{error}</p>
								</div>{' '}
								<p className='text-center'>
									<>
										<button
											onClick={handleForgetPassword}
											className='btn btn-link btn-primary'
										>
											Forget Password ?
										</button>
									</>
								</p>
								<p className='text-center text-gray-500  font-medium'>
									New to Weepoka?
									<Link className='text-blue-500 font-bold ml-2' to='/signup'>
										SignUp
									</Link>
								</p>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

/*
<div className="hero min-h-screen ">
          <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <img className="w-3/4" src={login1} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 hover: shadow-purple-900 py-12">
              <h1 className="text-4xl text-center font-bold my-3">Login !</h1>
               <Form onSubmit={handleLogin} className="card-body">               
               <div className="form-control">
               <label className="label">
                 <span className="label-text">Email</span>
               </label>
               <input
                 onBlur={handleEmailBlur}
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
               {/* <label className="label">
             <Link
               onClick={handleForgetPassword()}
               className="label-text-alt link link-hover"
             >
               Forgot password?
             </Link>
           </label> 
             </div>
             <div className="form-control mt-6">
               <input
                 type="submit"
                 className="btn btn-primary"
                 value="Login"
               />
             </div>
             <p className="text-red-600">{error}</p>
           </Form>
           <p className="text-center">
             <>
               <button
                 onClick={handleForgetPassword}
                 className="btn btn-link btn-primary"
               >
                 Forget Password ?
               </button>
             </>
           </p>
           <p className="text-center">
             New to Car wash and Services
             <Link className="text-orange-600 font-bold ml-2" to="/signup">
               SignUp
             </Link>
           </p>
           <div className="text-center mt-3">
             <p>Or Sign In with </p>
             <button
               onClick={handleGoogleSignIn}
               className="btn rounded-full btn-secondary mt-2"
             >
               <FaGoogle></FaGoogle>
             </button>
             <button className="btn rounded-full btn-secondary mt-2 ml-2">
               <FaLinkedinIn></FaLinkedinIn>
             </button>
           </div>
         </div>
       </div>
     </div>






*/
