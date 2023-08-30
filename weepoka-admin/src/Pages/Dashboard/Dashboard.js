import React from 'react';
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from '@ant-design/plots';
import { Table } from 'antd';
import { TbCurrencyTaka } from 'react-icons/tb';
//for recent order table 
const columns = [
    {
      title: 'SL NO',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
   
    {
      title: 'Mobile',
      dataIndex: 'mobile',
    },
    {
      title: 'Total Amount',
      dataIndex: 'total',
    },
    {
        title: 'Date',
        dataIndex: 'date',
      },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      total: `${i}`,
      date: `13-12-2022`,
      mobile: `01546876374`,
      address: `London, Park Lane no. ${i}`,
    });
  }



const Dashboard = () => {
    //for chart of income
    const data = [
        {
          type: 'January',
          sales: 38,
        },
        {
          type: 'February',
          sales: 52,
        },
        {
          type: 'March',
          sales: 61,
        },
        {
          type: 'April',
          sales: 145,
        },
        {
          type: 'May',
          sales: 48,
        },
        {
          type: 'June',
          sales: 38,
        },
        {
          type: 'July',
          sales: 38,
        },
        {
          type: 'August',
          sales: 98,
        },
        {
          type: 'September',
          sales: 38,
        },
        {
          type: 'October',
          sales: 68,
        },
        {
          type: 'November',
          sales: 78,
        },
        {
          type: 'December',
          sales: 88,
        },
      ];
      const config = {
        data,
        xField: 'type',
        yField: 'sales',
        // color: ({ type }) => {
           
        //     return #ffd333 ;
        // },
        label: {
        
          position: 'middle',
          // 'top', 'bottom', 'middle',
         
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: 'Months',
          },
          sales: {
            alias: 'Income',
          },
        },
      };
      
    return (
        <div className='m-5'>
            <h3 className='mb-4 title'>Dashboard</h3> 
            <div className='d-flex justify-content-between align-items-center gap-3'>
            <div 
            style={{backgroundColor:'#B4CDE6'}}
            className='card d-flex justify-content-between align-items-center   flex-grow-1 p-3 rounded-3'>  
                <div className=''>  
                        <p className="desc title ">Total Sells</p>
                        <h4 className="mb-0 sub-title"><span><TbCurrencyTaka/></span> 1100</h4>
                    </div>
                    {/* <div className="d-flex flex-column align-items-end">
                        <h6 className="green">
                        <BsArrowDownRight /> 32%
                        </h6>
                        <p className="mb-0  desc">Compared To April 2022</p>
                    </div> */}
                    
            </div>
            <div 
            style={{backgroundColor:'#CFF5E7'}}
            className=' card d-flex justify-content-between align-items-center   flex-grow-1  p-3 rounded-3'>  
                <div>
                        <p className="desc title">Total Products</p>
                        <h4 className="mb-0 sub-title"> <span><TbCurrencyTaka/></span>   1100</h4>
                    </div>
                    {/* <div className="d-flex flex-column align-items-end">
                        <h6  className="red">
                        <BsArrowDownRight /> 32%
                        </h6>
                        <p className="mb-0  desc">Compared To April 2022</p>
                    </div> */}
                    {/* <div className="vr"></div> */}
            </div>
            <div 
                 style={{backgroundColor:'#B9E0FF'}}
            className='card d-flex justify-content-between align-items-center   flex-grow-1 p-3 rounded-3'>  
                <div>
                        <p className="desc title">Total Order</p>
                        <h4 className="mb-0 sub-title"> 1100</h4>
                    </div>
                    {/* <div className="d-flex flex-column align-items-end">
                        <h6  className="green">
                        <BsArrowDownRight /> 32%
                        </h6>
                        <p className="mb-0  desc">Compared To April 2022</p>
                    </div> */}
            </div>
                
            </div>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom my-3"></div>
            <div className='mt-5'>
                <h2 className='mb-4 title'>Income Statistics</h2>
                <div>
                    
                <Column {...config} />
                </div>
            </div>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom my-3"></div>
            <div className='mt-5 '>
                <h2 className='mb-4 title'>Recent Orders</h2>
                <div>
                <Table  columns={columns} dataSource={data1} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;