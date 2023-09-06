import React from "react";

const CategoryFilter = ({ categories, handleClick }) => {
  const buttons1 = categories.map((category, index) => {
    // console.log(category);
    return (
      <span key={index} className="mb-2 mr-5 hover:text-black">
        <button onClick={() => handleClick(category)}>{category}</button>
      </span>
    );
  });
  // console.log(buttons1);
  // console.log(categories);
  return (
    <div className="text-blue-400">
      <p className="text-xl mb-2 mt-5 ">{buttons1}</p>
      {/* <div className="form-control ml-3  ">
        <select
          onChange={handleChange}
          className="input input-bordered w-full "
          type="text"
          required
          name="category"
        >
          {buttons1.map((button) => (
            <option>{button}</option>
          ))}
          <option value="">{buttons1}</option>
        </select>
      </div> */}
    </div>
  );
};

export default CategoryFilter;
