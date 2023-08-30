import React, { useEffect, useState } from 'react';
import { Link, Navigate, redirect } from 'react-router-dom';

const Login = () => {
	const [error, setError] = useState('');
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [admin, setAdmin] = useState(false);
	const user = {
		email: email,
		password: password,
	};

	const loginHandler = (e) => {
		e.preventDefault();
		if (!user.email || !user.password) {
			return setError('Please fill in all fields');
		}
		setEmail('');
		setPassword('');

		fetch('http://localhost:5000/api/v1/user/login', {
			method: 'POST',
			headers: { 'Content-Type': 'Application/json' },
			// eslint-disable-next-line no-undef
			body: JSON.stringify(user),
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.status) return window.open('/admin', '_self');
			})
			.catch((err) => setError(err));
	};

	useEffect(() => {
		if (admin) {
			redirect('/admin');
		}
	}, [admin]);

	return (
		<div className='py-5' style={{ background: '#808080', minHeight: '100vh' }}>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
				<h3 className='text-center title'>Login</h3>
				<p className='text-center'>Login to your account to continue.</p>
				<form>
					{/* <CustomInput type='text' label='Email Address' id='email' />
					<CustomInput type='password' label='Password' id='pass' /> */}
					<input
						onChange={(e) => setEmail(e.target.value)}
						style={{ padding: '10px', margin: '0px auto 0px auto' }}
						type='text'
						name='email'
						value={email}
						required
						placeholder='Email Address'
					/>
					<input
						onChange={(e) => setPassword(e.target.value)}
						style={{ padding: '10px', margin: '5px auto 0px auto' }}
						type='password'
						required
						value={password}
						placeholder='password'
					/>
					<p>{error}</p>
					<div className='mb-3 text-end'>
						<Link to='forgot-password' className=''>
							Forgot Password?
						</Link>
					</div>
					<button
						onClick={loginHandler}
						to=''
						className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'
						style={{ background: '#00008B' }}
						type='submit'
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
