import React, { useEffect, useState } from "react";
import { CategoriesActionType } from "../../Actions";
import { CategoryLink } from "./CategoryLink";
import { CategoryGenderTitle } from "./CategoryGenderTitle";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { CategoryType } from "../../DataType";
import { useLocation } from "react-router-dom";

export const SelectCategories = () => {
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
      if(!loading){
        const catePath = location.pathname.split("/")[2];
        selectCate(catePath);
      }
  }, [loading])
  return (
    loading ? 
    <div>Loading categories</div>
    :
    <div className="w-full flex p-16" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="flex flex-col">
        <CategoryGenderTitle title="WOMEN" />
        {womenCate.map(cate => {
          return (
            <CategoryLink
              title={cate.name}
              key={cate.id}
              onClick={() => selectCate(cate.name)}
              active={selectedCate === cate.name}
            />
          );
        })}
        <CategoryGenderTitle title="MEN" />
        {menCate.map(cate => {
          return (
            <CategoryLink
              title={cate.name}
              key={cate.id}
              onClick={() => selectCate(cate.name)}
              active={selectedCate === cate.name}
            />
          );
        })}
      </div>
    </div>
  );
};
