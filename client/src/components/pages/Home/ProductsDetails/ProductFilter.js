import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductFilter = () => {
  const [searchParams] = useSearchParams();
  const min_price =
    searchParams.get("min_price") === null ? "" : searchParams.get("min_price");
  const max_price =
    searchParams.get("max_price") === null ? "" : searchParams.get("max_price");
  const search =
    searchParams.get("search") === null ? "" : searchParams.get("search");

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  // }

  return (
    <div className="hero bg-base-200 rounded">
      <div className="hero-content h-[260px]">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded">
          <div className="card-body px-5 py-4">
            <h3 className="text-2xl">Select price Range</h3>
            <form method="GET">
              <div className="form-control mb-1">
                <label className="input-group input-group-md">
                  <input
                    defaultValue={min_price}
                    type="number"
                    name="min_price"
                    required
                    placeholder="lower Price"
                    className="input input-bordered input-sm mx-auto rounded-t-none rounded-r-none rounded-b-none rounded-l-none"
                  />
                </label>
              </div>
              <div className="form-control mb-1">
                <label className="input-group input-group-md">
                  <input
                    defaultValue={max_price}
                    type="number"
                    name="max_price"
                    placeholder="higher Price"
                    required
                    className="input input-bordered input-sm  mx-auto"
                  />
                </label>
              </div>
              <div className="divider">OR</div>
              <div className="form-control">
                <label className="input-group input-group-md">
                  <input
                    defaultValue={search}
                    type="text"
                    name="search"
                    placeholder="product name"
                    className="input input-bordered input-sm  mx-auto"
                  />
                </label>
              </div>
              <div className="form-control mt-3">
                <button type="submit" className="btn rounded-none bg-black">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
