import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';

const AdminRoutes = ({ children }) => {
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true); // Initialize loading as true
	const location = useLocation();
	const authContext = useContext(AuthContext);

	useEffect(() => {
		fetchProfile();
	}, []);

	const fetchProfile = () => {
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
	};

	// Check if the user is authenticated
	if (authContext.isAuthenticated) {
		// Check if the profile has loaded
		if (loading) {
			return (
				<div role='status' className='text-center my-40'>
					<Loading />
				</div>
			);
		}

		// Check if the user is an admin
		if (profile?.isAdmin && profile?.role === 'admin') {
			return children;
		} else {
			// Redirect to login if the user is not an admin
			return <Navigate to='/login' state={{ from: location }} replace />;
		}
	} else {
		// Redirect to login if the user is not authenticated
		return <Navigate to='/login' state={{ from: location }} replace />;
	}
};

export default AdminRoutes;
