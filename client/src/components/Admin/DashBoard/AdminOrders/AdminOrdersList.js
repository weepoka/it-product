import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

const AdminOrdersList = ({ order }) => {
	const {
		address,
		user,
		email,
		contactNumber,
		price,
		products,
		paidStatus,
		orderStatus,
		updatedAt,
	} = order;
	console.log(order);
	const date = new Date();
	return (
		<>
			<Tr className='py-10 text-center'>
				<Td className='py-6 text-center'>
					{products?.map((item) => (
						<>
							<p>{item.productPin}</p>
						</>
					))}
				</Td>
				<Td className='py-6 text-center'>
					{products?.map((item) => (
						<>
							<p>{item.name}</p>
						</>
					))}
				</Td>
				<Td scope='row'>
					{products?.map((item) => (
						<>
							<p>{item.quantity}</p>
						</>
					))}
				</Td>

				<Td>{user?.name}</Td>
				<Td>{contactNumber}</Td>
				<Td>{paidStatus.toString()}</Td>
				<Td>{orderStatus}</Td>
				<Td>{date.toLocaleDateString('en-US', updatedAt)}</Td>
				<Td>{price}</Td>
				<Td>none</Td>
				{/* <td > */}
				{/* <Link to ={`/updateProduct/${order._id}`}><span><AiFillEdit ></AiFillEdit>Edit   </span></Link> */}

				{/* <Link to=``>Edit</Link> */}

				{/* <UpdateProduct></UpdateProduct> */}
				{/* <button onClick={() => navigate(`updateProduct/${product._id}`)}>edit</button> */}
				{/* <button onClick={ handleClick}>edit</button> */}
				{/* <Button   type="submit" className='p-0 text-primary'> <span><AiFillEdit ></AiFillEdit>Edit   </span> </Button> */}

				{/* </Td> */}
				{/* <Td ><Button type="submit" className='p-0 text-danger'> <span className='text-danger'><AiOutlineDelete ></AiOutlineDelete></span> Delete</Button></Td> */}
			</Tr>
		</>
	);
};

export default AdminOrdersList;
