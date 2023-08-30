import React, { useEffect, useState } from 'react';
import { Button, Space, Table } from 'antd';
import { IoMdPricetag } from 'react-icons/io';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate, redirect } from 'react-router-dom';
import { Navigate, Redirect } from 'react-router';
import UpdateProduct from '../UpdateProduct/UpdateProduct';

const ProductListTable = ({ product }) => {
	const {
		Description,
		category,
		name,
		newPrice,
		oldPrice,
		offerPrice,
		quantity,
		brand,
		_id,
		imageUrls,
	} = product;
	console.log(product);

	const navigate = useNavigate();

	const handleClick = () => {
		// navigate("/admin");
		navigate(`/updateProduct/${product._id}`);
		// navigate(`/updateProduct/${product._id}`)
	};
	// const [filteredInfo, setFilteredInfo] = useState({});
	// const [sortedInfo, setSortedInfo] = useState({});

	// const data = [
	//     {
	//       key: `${product._id}`,
	//       name: `${product.name}`,
	//       price:`${product.newPrice}`,
	//      category: `${product.category}`,
	//     },
	// {
	//   key: '2',
	//   name: 'Jim Green',
	//   age: 42,
	//   address: 'London No. 1 Lake Park',
	// },
	// {
	//   key: '3',
	//   name: 'Joe Black',
	//   age: 32,
	//   address: 'Sidney No. 1 Lake Park',
	// },
	// {
	//   key: '4',
	//   name: 'Jim Red',
	//   age: 32,
	//   address: 'London No. 2 Lake Park',
	// },
	// ];
	//  console.log(data)
	// const handleChange = (pagination, filters, sorter) => {
	//     console.log('Various parameters', pagination, filters, sorter);
	//     setFilteredInfo(filters);
	//     setSortedInfo(sorter);
	//   };
	//   const clearFilters = () => {
	//     setFilteredInfo({});
	//   };
	//   const clearAll = () => {
	//     setFilteredInfo({});
	//     setSortedInfo({});
	//   };
	//   const setAgeSort = () => {
	//     setSortedInfo({
	//       order: 'descend',
	//       columnKey: 'price',
	//     });
	//   };
	//   const columns = [
	//     {
	//       title: 'Product',
	//       dataIndex: 'name',
	//       key: 'name',
	//       filters: [
	//         {
	//           text: `${product.name}`,
	//           value: `${product.name}`,
	//         },
	//         {
	//           text: 'Jim',
	//           value: 'Jim',
	//         },
	//       ],
	//       filteredValue: filteredInfo.name || null,
	//       onFilter: (value, record) => record.name.includes(value),
	//       sorter: (a, b) => a.name.length - b.name.length,
	//       sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
	//       ellipsis: true,
	//     },

	//     {
	//       title: 'Category',
	//       dataIndex: 'category',
	//       key: 'category',
	//       filters: [
	//         {
	//           text: 'London',
	//           value: 'London',
	//         },
	//         {
	//           text: 'New York',
	//           value: 'New York',
	//         },
	//       ],
	//       filteredValue: filteredInfo.address || null,
	//       onFilter: (value, record) => record.address.includes(value),
	//       sorter: (a, b) => a.address.length - b.address.length,
	//       sortOrder: sortedInfo.columnKey === 'category' ? sortedInfo.order : null,
	//       ellipsis: true,
	//     },
	//     {
	//       title: 'Stock',
	//       dataIndex: 'address',
	//       key: 'address',
	//       filters: [
	//         {
	//           text: 'London',
	//           value: 'London',
	//         },
	//         {
	//           text: 'New York',
	//           value: 'New York',
	//         },
	//       ],
	//       filteredValue: filteredInfo.address || null,
	//       onFilter: (value, record) => record.address.includes(value),
	//       sorter: (a, b) => a.address.length - b.address.length,
	//       sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
	//       ellipsis: true,
	//     },
	//     {
	//       title: 'Price',
	//       dataIndex: 'age',
	//       key: 'age',
	//       sorter: (a, b) => a.age - b.age,
	//       sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
	//       ellipsis: true,
	//     },
	//   ];

	return (
		<>
			{/* <>
            <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </> */}

			<>
				<tr>
					<td></td>
					<th scope='row'>{name}</th>

					<td>{newPrice}</td>
					<td>{oldPrice}</td>
					<td>{offerPrice}</td>
					<td>{brand}</td>
					<td>{category}</td>
					<td>
						<Link to={`/updateProduct/${product._id}`}>
							<span>
								<AiFillEdit></AiFillEdit>Edit{' '}
							</span>
						</Link>

						{/* <Link to=``>Edit</Link> */}

						{/* <UpdateProduct></UpdateProduct> */}
						{/* <button onClick={() => navigate(`updateProduct/${product._id}`)}>edit</button> */}
						{/* <button onClick={ handleClick}>edit</button> */}
						{/* <Button   type="submit" className='p-0 text-primary'> <span><AiFillEdit ></AiFillEdit>Edit   </span> </Button> */}
					</td>
					<td>
						<Button type='submit' className='p-0 text-danger'>
							{' '}
							<span className='text-danger'>
								<AiOutlineDelete></AiOutlineDelete>
							</span>{' '}
							Delete
						</Button>
					</td>
				</tr>
			</>
		</>
	);
};

export default ProductListTable;
