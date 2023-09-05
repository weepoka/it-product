const getAllProducts = (setProducts) => {
  const getData = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER}/products/dispayProducts`
      );
      const data = await res.json();
      if (res.ok) {
        setProducts(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getData();
};
const getCategories = (setCategory) => {
  const getData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/category`);
      const data = await res.json();
      if (res.ok) {
        setCategory(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getData();
};

const getProductsByCategory = (setCategoryData, id) => {
  const getData = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER}/products?category=${id}`
      );
      const data = await res.json();
      if (res.ok) {
        setCategoryData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getData();
};

export { getCategories, getProductsByCategory, getAllProducts };
