import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';

const AdminBanners = () => {
	const [banners, setBanners] = useState([]);
	const [refetch, setRefetch] = useState(false);
	console.log(banners);

	useEffect(() => {
		getBanners();
	}, [refetch]);

	const getBanners = async () => {
		try {
			const res = await fetch(`${process.env.REACT_APP_SERVER}/banner`, {
				credentials: 'include',
			});
			const data = await res.json();

			if (res.ok) {
				setBanners(data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (id) => {
		try {
			const confirm = window.confirm('are you sure to delete');
			if (!confirm) return;
			const res = await fetch(`${process.env.REACT_APP_SERVER}/banner/${id}`, {
				method: 'DELETE',
				credentials: 'include',
			});
			const data = await res.json();
			console.log(res);
			if (res.ok) {
				setRefetch((prev) => !prev);
				toast.success('banner deleted ');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='flex m-10 flex-wrap justify-between'>
			{banners?.map((item) => (
				<div className='max-w-sm  relative rounded-md overflow-hidden'>
					<img src={item.image} alt='' />
					<button
						onClick={() => handleDelete(item._id)}
						className='text-red-500 text-3xl bg-white top-0 right-0 absolute'
					>
						<AiFillDelete />
					</button>
				</div>
			))}
		</div>
	);
};

export default AdminBanners;
