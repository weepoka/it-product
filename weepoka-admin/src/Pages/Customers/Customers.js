import React from 'react';
import {  Table } from 'antd';
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobile',
    },
    {
      title: 'Total Orders',
      dataIndex: 'orders',
    },
  ];
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      email: `wepooka.dev@gmail.com`,
      mobile:`01685111860`,
      orders: `${i+3}`,
    });
  }
const Customers = () => {
    return (
        <div className='m-5'>
            <h2>Customer List</h2>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom mb-3"></div>
           <div><Table  columns={columns} dataSource={data} />
                </div>
                
           
        </div>
    );
};

export default Customers;