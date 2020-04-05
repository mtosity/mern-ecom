import React from "react";
import { CategoryLink } from "./CategoryLink";
import { CategoryGenderTitle } from "./CategoryGenderTitle";
import { CategoryType } from "../../DataType";

interface props {
  loading: boolean;
  categories: Array<CategoryType>;
  selectedCate: string;
  selectCate: Function;
}

export const SelectCategories = ({
  loading,
  categories,
  selectedCate,
  selectCate
}: props) => {
  const menCate = categories.filter(c => c.gender === "male");
  const womenCate = categories.filter(c => c.gender === "female");
  return loading ? (
    <div>Loading categories</div>
  ) : (
    <div
      className="w-full flex p-16 sm:p-16 md:p-8 xs:p-4"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="flex flex-col w-1/3 md:w-1/3 sm:w-full sm:mx-12 xs:mx-0">
        <CategoryLink
          title="all"
          onClick={() => selectCate("all")}
          active={selectedCate === "all"}
        />
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
      <div className="flex justify-center items-center w-2/3 md:mt-4 px-8 md:w-2/3 sm:hidden">
        <img
          src="https://c.76.my/Malaysia/women-korean-fashion-couples-plaid-long-sleeved-fairy-style-skirt-snowfashionshop-1905-27-F1619380_1.jpg"
          alt=""
          className="mx-4 w-full md:w-3/4"
        />
      </div>
    </div>
  );
};
