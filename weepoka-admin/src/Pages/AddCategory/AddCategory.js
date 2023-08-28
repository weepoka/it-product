import React from 'react';
import CustomInput from './../CustomInput/CustomInput';


const AddCategory = () => {
    return (
        <div>
        <h3 className="mb-4  title">Add Category</h3>
        <div>
          <form action="">
            <CustomInput type="text" label="Enter Add Category" />
            <button
              className="btn btn-success border-0 rounded-3 my-5"
              type="submit"
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    );
};

export default AddCategory;