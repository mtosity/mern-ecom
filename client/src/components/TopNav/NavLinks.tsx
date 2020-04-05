import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { MenDropDown } from "./MenDropDown";
import { WomenDropDown } from "./WomenDropDown";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { CategoryType } from "../../DataType";
import { Link } from "react-router-dom";

export const NavLinks = () => {
  const categories = useSelector<ApplicationState, Array<CategoryType>>(state => state.CategoriesReducer);
  const menCate = categories.filter(c => c.gender === "male")
  const womenCate = categories.filter(c => c.gender === "female")
  return (
    <div className="flex ml-4 items-center lg:hidden">
      <Link
        to="/"
        className="inline-block px-4 ml-4 py-3 hover:bg-red-500 hover:text-white text-gray-700"
      >
        HOME
      </Link>
      <div className="group">
        <a
          href="#"
          className="flex items-center hover:bg-red-500 hover:text-white text-gray-700 px-4 ml-4 py-3"
        >
          WOMEN
          <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 ml-2" />
        </a>
        <WomenDropDown menu={womenCate}/>
      </div>
      <div className="group">
        <a
          href="#"
          className="flex items-center hover:bg-red-500 hover:text-white text-gray-700 px-4 ml-4 py-3"
        >
          MEN
          <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 ml-2" />
        </a>
        <MenDropDown menu={menCate}/>
      </div>
      <Link
        to="/order"
        className="inline-block px-4 ml-4 py-3 hover:bg-red-500 hover:text-white text-gray-700"
      >
        ORDERS
      </Link>
    </div>
  );
};
