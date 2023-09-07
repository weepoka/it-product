import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';

import {
	Form,
	Link,
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { facebookLogin, googleLogin, signIn } from '../../ApiServices/auth';

import { toast } from 'react-hot-toast';
import Loading from '../Loading/Loading';
import Login from '../Login/Login';

const ForgetPassword = () => {
	const { resetToken } = useParams();
	const [message, setMessage] = useState('');
	const [color, setColor] = useState('');
	const [loading, setLoading] = useState(false);

	const [password, setUser] = useState({}); //create for store getting email for reset
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
		event.preventDefault();
		console.log(password);
		if (password.password !== password.confirmPassword) {
			setColor('red');
			setMessage('confirmPassword does not match');
			return toast.error('confirmPassword does not match');
		}

		setLoading(true);

		try {
			const res = await fetch(
				`${process.env.REACT_APP_SERVER}/user/forget-password/${resetToken}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'Application/json',
					},
					body: JSON.stringify(password),
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
				toast.success('passport reset Successfull');
			}
		} catch (error) {
			console.log(error);
			setMessage(error.message);
		} finally {
			setLoading(false);
		}
	};

	//get email
	const handleInputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		password[name] = value;
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
							<div className='relative mt-3'>
								{/*//!Password field */}
								<input
									onChange={handleInputChange}
									className='appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline'
									type='password'
									name='password'
									placeholder='password'
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
							<div className='relative mt-3'>
								{/*//!Password field */}
								<input
									onChange={handleInputChange}
									className='appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline'
									type='password'
									name='confirmPassword'
									placeholder='confirm password'
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
									className='text-white py-2 w-full px-4 uppercase rounded bg-[#006FBA] hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 
                    
                    '
								>
									{loading ? <Loading /> : 'Reset'}
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
										<Link to='/login'>
											<button className='btn btn-link '>Login</button>
										</Link>
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

export default ForgetPassword;
