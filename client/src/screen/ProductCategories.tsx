import React, { useEffect, useState } from "react";
import { SelectCategories } from "../components/ProductCategories/SelectCategories";
import { useSelector } from "react-redux";
import { ApplicationState } from "../Reducers/CombinedReducers";
import { useLocation } from "react-router-dom";
import { CategoryType } from "../DataType";
import { ProductGrid } from "../components/ProductGrid";
import { useQuery } from "../utils/useQuery";

export const ProductCategories = () => {
  let location = useLocation();
  const categories = useSelector<ApplicationState, Array<CategoryType>>(
    state => state.CategoriesReducer
  );
  const loading = useSelector<ApplicationState, boolean>(
    state => state.GlobalReducer.loading
  );
  const [selectedCate, selectCate] = useState("");
  const [products, setProducts] = useState([]);
  const query = useQuery();
  useEffect(() => {
    if (!loading) {
      const catePath = location.pathname.split("/")[2];
      const cates = categories.filter(c => c.name === catePath);
      selectCate(catePath === "all" ? "all" : cates[0].name);
      let q = query.get("q") || "";
      const cateID = catePath === "all" ? "" : cates[0].id;
      fetch(`/api/product/category?q=${q}&cateID=${cateID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        res.json().then(products => {
          setProducts(products);
        });
      });
    }
  }, [categories, loading, location]);
  return (
    <div>
      <SelectCategories
        categories={categories}
        selectedCate={selectedCate}
        selectCate={selectCate}
        loading={loading}
      />
      <ProductGrid products={products} />
    </div>
  );
};
