import React, { useEffect, useState } from "react";
import { SelectCategories } from "../components/ProductCategories/SelectCategories";
import { useSelector } from "react-redux";
import { ApplicationState } from "../Reducers/CombinedReducers";
import { useLocation } from "react-router-dom";
import { CategoryType } from "../DataType";

export const ProductCategories = () => {
  let location = useLocation();
  const categories = useSelector<ApplicationState, Array<CategoryType>>(
    state => state.CategoriesReducer
  );
  const loading = useSelector<ApplicationState, boolean>(
    state => state.GlobalReducer.loading
  );
  const menCate = categories.filter(c => c.gender === "male");
  const womenCate = categories.filter(c => c.gender === "female");
  const [selectedCate, selectCate] = useState("");
  useEffect(() => {
    if (!loading) {
      const catePath = location.pathname.split("/")[2];
      const cate = categories.filter(c => c.name === catePath);
      if (cate.length === 1) {
        selectCate(cate[0].name);
      }
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
    </div>
  );
};
