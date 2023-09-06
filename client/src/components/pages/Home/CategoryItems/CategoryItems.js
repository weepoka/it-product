import React from "react";
import ProductsDetails from "./../ProductsDetails/ProductsDetails";

const CategoryItems = ({ slice }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10">
        {slice.map((product) => (
          <ProductsDetails
            key={product._id}
            product={product}
          ></ProductsDetails>
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
