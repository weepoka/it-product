import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';

import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { facebookLogin, googleLogin, signIn } from '../../ApiServices/auth';

import { toast } from 'react-hot-toast';
import Loading from '../Loading/Loading';

const ResetPassword = () => {
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [color, setColor] = useState('');

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
	const handleForgetPassword = async (event) => {
		console.log(user);
		event.preventDefault();
		setLoading(true);
		setMessage('');
		try {
			const res = await fetch(
				`${process.env.REACT_APP_SERVER}/user/reset-password`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'Application/json',
					},
					body: JSON.stringify(user),
				}
			);
			const data = await res.json();
			console.log(data);
			if (!res.ok) {
				setColor('red');
				setMessage(data.message);
			}
			if (res.ok) {
				setColor('green');
				setMessage(data.message);
			}
		} catch (error) {
			setMessage(error.message);
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

	return (
		<div className='my-20'>
			<div className=''>
				<div className='p-8 lg:w-1/2 mx-auto'>
					<div className='bg-white rounded-t-lg p-8 '>
						<p className='text-center text-xl font-bold text-gray-700 '>
							Forget Password
						</p>
					</div>
					<div className='bg-gray-300 rounded-b-lg py-12 px-4 lg:px-20 '>
						<p className='text-center text-2xl text-gray-600 font-bold'>
							forget
						</p>
						{/* //* Form */}
						<Form className='mt-6' onSubmit={handleForgetPassword}>
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

							<div className='flex items-center justify-center my-5'>
								<button
									type='submit'
									disabled={loading}
									className='text-white py-2 w-full px-4 uppercase rounded bg-[#006FBA] hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 
                    
                    '
								>
									{loading ? <Loading /> : 'Forget'}
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
									<p className={`text-${color}-600`}>{message}</p>
								</div>{' '}
								<p className='text-center'>
									<>
										<button className='btn btn-link '>Login</button>
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

export default ResetPassword;
