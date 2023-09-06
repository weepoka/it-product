import React, { useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import ProductsDetails from "../../ProductsDetails/ProductsDetails";
import { AiFillHome } from "react-icons/ai";
import { RxSlash } from "react-icons/rx";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { NavLink } from "react-router-dom";
const LaptopAndTab = () => {
  const product = useLoaderData();

  // const { product } = useContext(AuthContext);
  console.log(product);

  const [selectedCategory, setSelectedCategory] = useState();
  console.log(selectedCategory);
  const [selectedProduct, setSelectedProduct] = useState(product);
  const cats = [
    ...new Set(product?.filter((card) => card.category === "Laptop")),
  ];
  console.log(cats);
  useEffect(() => {
    filtered();
  }, [product]);
  const filtered = () => {
    const category = product?.filter(
      (cat) => cat.category.toLowerCase() === "Laptop".toLowerCase()
      // cat.category === "laptop" ||
      // cat.category === "Tab" ||
      // cat.category.toLowerCase() === "Tablet".toLowerCase()
      // ||
      // cat.category === "tab"
    );
    console.log(category);
    setSelectedProduct(category);
  };
  // filtering  by
  const [selectedPrice, setSelectedPrice] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    // console.log(e.target.value);

    setSelectedPrice(value);
  };
  const priceFilterList = () => {
    if (!selectedPrice) {
      return selectedProduct;
    }
    if (selectedPrice === "Low") {
      return selectedProduct.sort((a, b) => a.oldPrice - b.oldPrice);
    }
    if (selectedPrice === "High") {
      return selectedProduct.sort((a, b) => b.oldPrice - a.oldPrice);
    }
    if (selectedPrice === "Offer") {
      return selectedProduct.filter((a) => a.offerPercentage);
    }
    if (selectedPrice === "Newest") {
      return selectedProduct.filter((a) => a.newArrival);
    }
    return selectedProduct;
  };

  //price range selection
  const [price, setPrice] = useState(500000);
  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e) => {
    setPrice(e.target.value);
  };

  // console.log(range);

  var filteredList = useMemo(priceFilterList, [selectedPrice, selectedProduct]);
  console.log(cats[0]?.category);
  const range = filteredList?.filter((item) => {
    return item.oldPrice < parseInt(price, 10);
  });

  const getUniqueData = (data, property) => {
    let newVal = data?.map((curEle) => {
      return curEle[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };
  const BrandData = getUniqueData(selectedProduct, "brand");

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value);
    setSelectedCategory(value);
  };
  const updateProduct = range?.filter((item) => {
    // console.log(item);
    if (!selectedCategory) {
      // console.log(selectedCategory);
      return item;
    }
    if (selectedCategory === "All") {
      return item;
    }
    return item.brand === selectedCategory;
  });
  const brandElements = BrandData?.map((curEl, index) => {
    return (
      <button
        value={curEl}
        key={index}
        name="brand"
        className="py-1 capitalize"
      >
        {curEl}
      </button>
    );
  });
  // console.log(brandElements, "brandElement");
  console.log(updateProduct?.length, "update product");
  const [stocks, setStock] = useState(false);
  console.log(stocks, "stocks product");
  const handleChecked = (event) => {
    if (event.target.checked) {
      setStock(true);
    }
    if (!event.target.checked) {
      setStock(false);
    }
  };

  //in stock filtering
  const instock = updateProduct?.filter((instocks) => {
    if (!stocks) {
      return instocks;
    }

    if (stocks) {
      return instocks.stock > 0;
    }
    return instocks;
  });
  console.log(instock, "instocks");

  // open hamburger product
  let [open, setOpen] = useState(false);
  let [openhum, setOpenHum] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <div className="max-w-screen-2xl  mx-auto py-20 ">
      <div className="md:px-10 flex items-center px-2 price-range-shadow py-5 mb-5 ">
        <div className="flex items-center">
          <h2 className="text-center  ">
            <NavLink
              to="/"
              className="text-gray-400 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-500 "
            >
              <AiFillHome className="md:mr-3 md:text-xl" />
            </NavLink>
          </h2>{" "}
          <RxSlash />
        </div>

        <p className="text-blue-500 md:ml-2 font-bold  md:text-xl">
          <NavLink to="/desktops"> {cats[0]?.category}</NavLink>
        </p>
      </div>

      <div
        className="
      md:flex gap-10 relative"
      >
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute left-3 top-10 cursor-pointer block md:hidden"
        >
          {" "}
          {open ? (
            <ImCross className="md:ml-2" />
          ) : (
            <div className="flex items-center gap-3 bg-gray-300  px-2 text-[#000]">
              <GiHamburgerMenu className="" />{" "}
              <h1 className="normal-case">Filter</h1>
            </div>
          )}
          {/* <GiHamburgerMenu name={open ? "close" : "menu"}></GiHamburgerMenu> */}
        </div>
        <div
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static   bg-white  left-0 z-10
           w-60 md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
             open ? "left-0 top-20 " : "left-[-500px] top-20"
           }`}
        >
          <div className="w-48 md:w-80 pb-10 md:block ">
            <div className="p-4 price-range-shadow">
              <h1 className="mb-3 text-center">
                {" "}
                <span className="text-gray-700 font-bold text-xl">
                  Price Range
                </span>
              </h1>
              <div className="flex justify-center py-3">
                <input
                  type="range"
                  min={0}
                  max={500000}
                  step={100}
                  className="w-[250px] "
                  onInput={handleInput}
                />
              </div>
              <div className="flex justify-between mt-5">
                <p className="border py-2 px-6">0</p>
                <p className="border p-2">{price}</p>
              </div>
            </div>
            <div className="p-4 price-range-shadow">
              <Accordion preExpanded={["a"]} allowZeroExpanded>
                <AccordionItem uuid="a">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span className="font-bold">Availability</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="form-control mt-5 ">
                      <label
                        className=" flex items-center cursor-pointer "
                        onChange={handleChecked}
                      >
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary mr-3 hover:text-gray-500"
                        />
                        <span className="text-blue-500 text-md font-semibold hover:text-gray-500">
                          In Stock
                        </span>
                      </label>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="price-range-shadow mt-5 py-3">
              <h3 className="py-3 px-8 text-xl font-bold text-gray-700">
                Brand
              </h3>
              <div className="  px-8 relative">
                <label
                  className="cursor-pointer  flex flex-col justify-start items-start text-blue-500"
                  name="brand"
                  onClick={updateFilterValue}
                >
                  {brandElements}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full z-1">
          <div className="price-range-shadow mb-5 py-2 ">
            <div className="flex gap-5 md:gap-10 items-center md:justify-between my-5 justify-end">
              <div>
                <h1 className="font-bold text-gray-500 flex gap-2 md:items-center md:flex-col md:px-10">
                  {" "}
                  <span>{updateProduct?.length}</span> Items
                </h1>
              </div>
              <div className="flex flex-col md:flex-row  justify-center items-center  mr-3 md:mr-0 md:px-3">
                <label className="mb-0 font-bold text-xl hidden md:block">
                  Filter:
                </label>
                <div className="form-control md:ml-3  ">
                  <select
                    onChange={handleChange}
                    className="input input-bordered md:w-full w-28 "
                    type="text"
                    required
                    name="category"
                  >
                    <option value="">Default</option>
                    <option value="Low">Lowest Price</option>
                    <option value="High">Highest Price</option>
                    <option value="Offer">Offer</option>
                    <option value="Newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {instock?.length >= 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10  price-range-shadow p-10">
              {instock?.map((product) => {
                return (
                  <ProductsDetails
                    key={product._id}
                    product={product}
                  ></ProductsDetails>
                );
              })}
            </div>
          ) : (
            <div className="mt-20 py-15 px-0 text-center">
              <div>
                <h2 className="text-3xl text-gray-500 py-10">
                  {" "}
                  Not Found. Search Again..
                </h2>

                <NavLink to="/">
                  <button className="py-2 px-4 rounded bg-gray-500 text-white font-semibold ">
                    Go to Home
                  </button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>{/* <CategoryFilter product={product} /> */}</div>
    </div>
  );
};

export default LaptopAndTab;
