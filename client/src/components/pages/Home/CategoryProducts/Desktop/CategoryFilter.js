import React, { useContext } from "react";

import { useState } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import ProductsDetails from "../../ProductsDetails/ProductsDetails";

const CategoryFilter = ({ product, range }) => {
  //   const { product } = useContext(AuthContext);

  const [selectedCategory, setSelectedCategory] = useState();
  console.log(selectedCategory);

  // console.log(product);

  const getUniqueData = (data, property) => {
    let newVal = data.map((curEle) => {
      return curEle[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };
  // we need unique data
  // const categoryOnlyData = getUniqueData(product, "category");
  const BrandData = getUniqueData(product, "brand");

  // console.log(BrandData);
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value);
    setSelectedCategory(value);
  };
  // const updateFilterProduct = () => {
  //   if (selectedCategory !== "All") {
  //     return product;
  //   }
  //   if (selectedCategory) {
  //     return product.filter((cat) => cat.category === selectedCategory);
  //   }
  //   if (selectedCategory) {
  //     return product.filter((cat) => cat.brand === selectedCategory);
  //   }
  //   return;
  // };
  // const updateFilter = useMemo(updateFilterProduct, [
  //   selectedCategory,
  //   product,
  // ]);
  // console.log(updateFilter);
  return (
    <div>
      {/* category filter */}
      <div>
        <h3>Category</h3>
        {/* <div>
          {categoryOnlyData.map((curEl, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curEl}
                onClick={updateFilterValue}
              >
                {curEl}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-4">
          {updateFilter.map((product) => (
            <ProductsDetails
              key={product._id}
              product={product}
            ></ProductsDetails>
          ))}
        </div> */}
      </div>
      <div>
        <h3>brand</h3>
        <form>
          <select name="brand" onClick={updateFilterValue}>
            {BrandData.map((curEl, index) => {
              return (
                <option value={curEl} key={index} name="brand">
                  {curEl}
                </option>
              );
            })}
          </select>
        </form>
        <div className="grid grid-cols-4">
          {product
            .filter((item) => {
              // console.log(item);

              return item.brand === selectedCategory;
            })
            .map((product) => (
              <ProductsDetails
                key={product._id}
                product={product}
              ></ProductsDetails>
            ))}

          {/* {!selectedCategory
            ? product
                .filter((item) => {
                  return item.brand !== selectedCategory;
                })
                .map((product) => (
                  <ProductsDetails
                    key={product._id}
                    product={product}
                  ></ProductsDetails>
                ))
            : product
                .filter((item) => {
                  return item.brand === selectedCategory;
                })
                .map((product) => (
                  <ProductsDetails
                    key={product._id}
                    product={product}
                  ></ProductsDetails>
                ))} */}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
