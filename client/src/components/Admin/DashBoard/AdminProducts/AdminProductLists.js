import { Button } from "antd";
import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete, AiOutlineDelete } from "react-icons/ai";
const AdminProductLists = ({ product, handleDelete }) => {
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
    image,
    price,
  } = product;
  return (
    <>
      <Tr className="py-10 text-center">
        <Td className="py-6 text-center">{name}</Td>
        <Td scope="row">{price}</Td>

        <Td>{oldPrice}</Td>
        <Td>{offerPrice}</Td>
        <Td>{brand}</Td>
        <Td>{category}</Td>
        <Td>{quantity}</Td>
        {/* <Td>{price}</Td> */}
        <Td>
          <Link to={`/adminUpdateProduct/${_id}`}>
            <p className="text-blue-800 text-2xl font-bold flex justify-center items-center">
              {" "}
              <span className="mr-2">
                <AiFillEdit></AiFillEdit>
              </span>
            </p>
          </Link>
        </Td>
        {/* <Link to=``>Edit</Link> */}

        {/* <UpdateProduct></UpdateProduct> */}
        {/* <button onClick={() => navigate(`updateProduct/${product._id}`)}>edit</button> */}
        {/* <button onClick={ handleClick}>edit</button> */}
        {/* <Button   type="submit" className='p-0 text-primary'> <span><AiFillEdit ></AiFillEdit>Edit   </span> </Button> */}

        {/* </Td> */}
        <Td>
          <Button
            type="submit"
            className="p-0 text-red-800 text-2xl fill-red-500 font-bold flex  items-center mx-auto"
            onClick={() => handleDelete(_id)}
          >
            <span className="text-red-500 mr-2">
              <AiFillDelete></AiFillDelete>
            </span>
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default AdminProductLists;
