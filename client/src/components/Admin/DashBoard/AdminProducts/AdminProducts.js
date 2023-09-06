import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import AdminProductLists from "./AdminProductLists";
import swal from "sweetalert";
const AdminProducts = () => {
  const [products, setProduct] = useState([]);
  // const {Description,category,name,new-price,quantity}=product
  const [reload, setReload] = useState(false);

  const fetchData = () => {
    fetch(`${process.env.REACT_APP_SERVER}/products/displayProducts`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setProduct(data.data);
      });
  };
  console.log(reload);
  //data fecthing
  useEffect(() => {
    fetchData();
  }, [reload]);
  // ! ====> Delet Product
  const handleDelete = (id) => {
    console.log("delet id", id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`${process.env.REACT_APP_SERVER}/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.success) {
              fetchData();
              setReload((prev) => !prev);
              console.log(reload);
            }
          });
        // ! ====> Aleart
        swal("Your product item has been deleted !", {
          icon: "success",
        });
      } else {
        swal("Your product item is safe!");
      }
    });
  };

  return (
    <div className="px-14">
      <h1 className="mt-20 text-3xl font-bold text-center mb-10">
        Products Details
      </h1>

      <div>
        <Table className="table table-hover border border-gray-700 ">
          <Thead className="py-5">
            <Tr className="">
              <Th className="px-20 py-5  font-bold text-xl">Product name</Th>
              <Th className="px-10 font-bold text-xl">New Price</Th>
              <Th className="px-10 font-bold text-xl">Old price</Th>
              <Th className="px-10 font-bold text-xl">Offer price</Th>
              <Th className="px-10 font-bold text-xl">Brand</Th>
              <Th className="px-10 font-bold text-xl">Category</Th>
              <Th className="px-10 font-bold text-xl">Quantity</Th>
              <Th className="px-10 font-bold text-xl text-blue-500">Edit</Th>
              <Th className="px-10 font-bold text-xl text-red-600">Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products?.map((product) => (
              <AdminProductLists
                key={product._id}
                product={product}
                handleDelete={handleDelete}
              ></AdminProductLists>
            ))}
          </Tbody>
        </Table>
      </div>
      {/* {
  products.map((product)=>(<ProductListTable key={product._id} product={product}></ProductListTable>) )
 } */}
      {/* { products.map((product) => (
<ProductListTable key={product._id} product={product}></ProductListTable>
))} */}
    </div>
  );
};

export default AdminProducts;
