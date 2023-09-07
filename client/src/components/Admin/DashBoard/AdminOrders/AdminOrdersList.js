import React, { useEffect, useState } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";

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
  //   [
  //     //   "Order Placed",
  //     "Processing",
  //     "Shipped",
  //     "Delivered",
  //     "canceled",
  //   ];
  const [statusColor, setStatusColor] = useState("");

  useEffect(() => {
    if (orderStatus === "Delivered") {
      setStatusColor("green");
    } else if (orderStatus === "canceled") {
      setStatusColor("red");
    } else {
      setStatusColor("");
    }
  }, []);

  const date = new Date();

  return (
    <>
      <Tr className="py-10 text-center">
        <Td className="py-6 text-center">
          {products?.map((item) => (
            <>
              <p>{item.productPin}</p>
            </>
          ))}
        </Td>
        <Td className="py-6 text-center">
          {products?.map((item) => (
            <>
              <p>{item.name}</p>
            </>
          ))}
        </Td>
        <Td scope="row">
          {products?.map((item) => (
            <>
              <p>{item.quantity}</p>
            </>
          ))}
        </Td>

        <Td>{user?.name}</Td>
        <Td>{contactNumber}</Td>
        <Td>{paidStatus.toString()}</Td>
        <Td>
          {/* {orderStatus === "Delivered" ? (
            <span className="font-bold text-green-500">{orderStatus}</span>
          ) : (
            <span className="font-bold">{orderStatus}</span>
          )} */}
          <span
            className={`${statusColor && `text-${statusColor}-400`} font-bold`}
          >
            {orderStatus}
          </span>
        </Td>
        <Td>{date.toLocaleDateString("en-US", updatedAt)}</Td>
        <Td>{price}</Td>
        <Td>
          <Link to={`${order?._id}`} className="text-green-600 font-bold">
            <div className="flex items-center">
              <span>Update</span> <BiEdit className="text-2xl ml-4" />
            </div>
          </Link>
        </Td>
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
