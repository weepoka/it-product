import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar/Sidebar';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AdminLayout = () => {
	const { profile } = useContext(AuthContext);

	return (
		<div className='flex '>
			<Sidebar></Sidebar>
			<Outlet></Outlet>
		</div>
	);
};

export default AdminLayout;
