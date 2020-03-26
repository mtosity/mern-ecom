import React, { useEffect, useState } from "react";
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
    if (!loading) {
      const catePath = location.pathname.split("/")[2];
      const cate = categories.filter(c => c.name === catePath);
      if (cate.length === 1) {
        selectCate(cate[0].name);
      }
    }
  }, [loading, location]);
  return loading ? (
    <div>Loading categories</div>
  ) : (
    <div className="w-full flex p-16 md:flex-col" style={{ backgroundColor: "#F5F5F5" }}>
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
      <div className="flex justify-center items-center w-full md:mt-4">
        <img
          src="https://cocoandcreme.com/wp-content/uploads/2019/07/1-1024x756.jpg"
          alt=""
          className="mx-4 w-3/4 md:w-full"
        />
      </div>
    </div>
  );
};
