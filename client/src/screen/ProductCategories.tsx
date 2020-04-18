import React, { useEffect, useState } from "react";
import { SelectCategories } from "../components/ProductCategories/SelectCategories";
import { useSelector } from "react-redux";
import { ApplicationState } from "../Reducers/CombinedReducers";
import { useLocation } from "react-router-dom";
import { CategoryType } from "../DataType";
import { ProductGrid } from "../components/ProductGrid";
import { useQuery } from "../utils/useQuery";
import ReactPaginate from "react-paginate";

export const ProductCategories = () => {
  let location = useLocation();
  const categories = useSelector<ApplicationState, Array<CategoryType>>(
    (state) => state.CategoriesReducer
  );
  const loading = useSelector<ApplicationState, boolean>(
    (state) => state.GlobalReducer.loading
  );
  const [selectedCate, selectCate] = useState("");
  const [page, setPage] = useState("1");
  const [proCount, setProCount] = useState(0);
  const [products, setProducts] = useState([]);
  const query = useQuery();
  useEffect(() => {
    if (proCount <= 8) {
      setPage("1");
    }
  }, [proCount]);
  useEffect(() => {
    if (!loading) {
      const catePath = location.pathname.split("/")[2];
      const cates = categories.filter((c) => c.name === catePath);
      selectCate(catePath === "all" ? "all" : cates[0].name);
      let q = query.get("q") || "";
      const cateID = catePath === "all" ? "" : cates[0].id;
      fetch(`/api/product?q=${q}&cate=${cateID}&page=${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        res.json().then((data) => {
          console.log(data);
          setProCount(data.count);
          setProducts(data.rows);
        });
      });
      window.scrollTo(0, 0);
    }
  }, [categories, loading, location, page]);
  return (
    <div>
      <SelectCategories
        categories={categories}
        selectedCate={selectedCate}
        selectCate={selectCate}
        loading={loading}
      />
      <p className="uppercase jo-font font-bold text-2xl ml-16 mt-16 sm:mt-8 text-red-500">
        {selectedCate}
      </p>
      <div className="w-32 border-b ml-16"></div>
      <ProductGrid products={products} />
      <div className="flex justify-center w-full my-8">
        <ReactPaginate
          previousLabel={
            <p className=" bg-admin-body text-white p-2 rounded">{"<prev"}</p>
          }
          nextLabel={
            <p className=" bg-admin-body text-white p-2 rounded">{"next>"}</p>
          }
          breakLabel={"..."}
          breakClassName={"flex justify-center items-center"}
          pageCount={proCount / 8}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={({ selected }) => {
            setPage((selected + 1).toString());
          }}
          containerClassName={"flex items-center rounded outline-none"}
          pageClassName="text-gray-900 bg-gray-300 mx-1 text-gray-600 rounded"
          pageLinkClassName="inline-block outline-none w-10 h-10 flex justify-center items-center font-bold"
          activeClassName="outline-none bg-blue-600 text-red-100 shadow-2xl rounded transform duration-300"
          previousLinkClassName="outline-none"
          nextLinkClassName="outline-none"
          breakLinkClassName="outline-none bg-gray-300"
        />
      </div>
      <div className="shadow-2xl text-gray-900 bg-gray-300 mx-1 text-gray-600 w-10 h-10 duration-300 transform text-red-100"></div>
    </div>
  );
};
