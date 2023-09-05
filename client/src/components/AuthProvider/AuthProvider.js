import React, { createContext, useState, useEffect } from 'react';
import app from '../Firebase/firebase.config';
import { getProfile } from '../../ApiServices/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [product, setProduct] = useState([]);
	const [profile, setProfile] = useState(null);
	const [loading, setLoading] = useState(true); // Initialize loading as true

	// Determine whether the user is authenticated or not
	const isAuthenticated = !!profile; // Assuming a user is authenticated if a profile exists

	// Load product data
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER}/products/displayProducts`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data.data);
			})
			.catch((error) => console.error(error));
	}, []);

	// Load user profile
	useEffect(() => {
		setLoading(true);
		fetch(`${process.env.REACT_APP_SERVER}/user/profile`, {
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => {
				setProfile(data.user);
				setLoading(false); // Set loading to false after fetching the profile
			})
			.catch((error) => {
				console.log(error);
				setLoading(false); // Handle errors by setting loading to false
			});
	}, []);

	const authInfo = {
		profile,
		loading,
		setLoading,
		setProfile,
		product,
		isAuthenticated, // Include the isAuthenticated property
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
