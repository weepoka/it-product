import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import { Link } from 'react-router-dom';
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
	const [form] = Form.useForm();
	return (
		<Form form={form} component={false}>
			<EditableContext.Provider value={form}>
				<tr {...props} />
			</EditableContext.Provider>
		</Form>
	);
};
const EditableCell = ({
	title,
	editable,
	children,
	dataIndex,
	record,
	handleSave,
	...restProps
}) => {
	const [editing, setEditing] = useState(false);
	const inputRef = useRef(null);
	const form = useContext(EditableContext);
	useEffect(() => {
		if (editing) {
			inputRef.current.focus();
		}
	}, [editing]);
	const toggleEdit = () => {
		setEditing(!editing);
		form.setFieldsValue({
			[dataIndex]: record[dataIndex],
		});
	};
	const save = async () => {
		try {
			const values = await form.validateFields();
			toggleEdit();
			handleSave({
				...record,
				...values,
			});
		} catch (errInfo) {
			console.log('Save failed:', errInfo);
		}
	};
	let childNode = children;
	if (editable) {
		childNode = editing ? (
			<Form.Item
				style={{
					margin: 0,
				}}
				name={dataIndex}
				rules={[
					{
						required: true,
						message: `${title} is required.`,
					},
				]}
			>
				<Input ref={inputRef} onPressEnter={save} onBlur={save} />
			</Form.Item>
		) : (
			<div
				className='editable-cell-value-wrap'
				style={{
					paddingRight: 24,
				}}
				onClick={toggleEdit}
			>
				{children}
			</div>
		);
	}
	return <td {...restProps}>{childNode}</td>;
};
const Orders = () => {
	const [orders, setorders] = useState([]);
	// const {Description,category,name,new-price,quantity}=product

	//data fecthing
	useEffect(() => {
		fetch(`http://localhost:5000/api/v1/orders`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setorders(data);
			});
	}, []);

	const [dataSource, setDataSource] = useState(
		orders
		// [
		//   {
		//     key: '0',
		//     name: 'Edward King 0',
		//     date: '13-02-2022',
		//     productId:12,
		//     paid:'No',
		//     status:'cancel',
		//     items:7,
		//     mobile:'0167859623',
		//     total:5000
		//   },
		//   {
		//     key: '1',
		//     name: 'Edward King 0',
		//     date: '13-12-2022',
		//     productId:13,
		//     paid:'Yes',
		//     status:'shipped',
		//     items:2,
		//     mobile:'0157855623',
		//     total:1000
		//   },
		//   {
		//     key: '2',
		//     name: 'Edward King 0',
		//     date: '3-02-2022',
		//     productId:2,
		//     paid:'partial',
		//     mobile:'0157859623',
		//     status:'pending',
		//     items:3,

		//     total:2000
		//   },

		// ]
	);
	const [count, setCount] = useState(2);
	const handleDelete = (key) => {
		const newData = dataSource.filter((item) => item.key !== key);
		setDataSource(newData);
	};
	const defaultColumns = [
		{
			title: 'Product Id',
			dataIndex: 'productId',
		},
		{
			title: 'Date',
			dataIndex: 'date',
			width: '10%',
			editable: true,
		},
		{
			title: 'Customer',
			dataIndex: 'name',
		},
		{
			title: 'Phone Number',
			dataIndex: 'mobile',
		},
		{
			title: 'Paid',
			dataIndex: 'paid',
		},
		{
			title: 'Status',
			dataIndex: 'status',
		},
		{
			title: 'Items',
			dataIndex: 'items',
		},
		{
			title: 'Total',
			dataIndex: 'total',
		},
		{
			title: 'Operation',
			dataIndex: 'operation',
			render: (_, record) =>
				dataSource.length >= 1 ? (
					<Popconfirm
						title='Sure to delete?'
						onConfirm={() => handleDelete(record.key)}
					>
						<Link className='text-danger'>Delete</Link>
					</Popconfirm>
				) : null,
		},
	];
	//   const handleAdd = () => {
	//     const newData = {
	//       key: count,
	//       name: `Edward King ${count}`,
	//       age: '32',
	//       address: `London, Park Lane no. ${count}`,
	//     };
	//     setDataSource([...dataSource, newData]);
	//     setCount(count + 1);
	//   };
	//   const handleSave = (row) => {
	//     const newData = [...dataSource];
	//     const index = newData.findIndex((item) => row.key === item.key);
	//     const item = newData[index];
	//     newData.splice(index, 1, {
	//       ...item,
	//       ...row,
	//     });
	//     setDataSource(newData);
	//   };
	const components = {
		body: {
			row: EditableRow,
			cell: EditableCell,
		},
	};
	const columns = defaultColumns.map((col) => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record) => ({
				record,
				editable: col.editable,
				dataIndex: col.dataIndex,
				title: col.title,
				// handleSave,
			}),
		};
	});
	return (
		<div>
			{/* <Button
                    onClick={handleAdd}
                    type="primary"
                    style={{
                      marginBottom: 16,
                    }}
                  >
                    Add a row
                  </Button> */}
			<Table
				components={components}
				rowClassName={() => 'editable-row'}
				bordered
				dataSource={dataSource}
				columns={columns}
			/>
		</div>
	);
};

export default Orders;
