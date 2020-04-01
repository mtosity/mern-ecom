import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { CategoriesStateInterface } from "../../Reducers/CategoriesReducer";
import { CategoryType } from "../../DataType";
import { Link } from "react-router-dom";
import useOutsideClick from "../../utils/useOutsideClick";

interface props {
  show: boolean;
}

export const NavLinksMobile = ({ show }: props) => {
  const [nav, setNav] = useState("HOME");
  const [dropDownNavs, setDDNavs] = useState<Array<CategoryType>>([]);
  const navs = ["HOME", "ABOUT", "MEN", "WOMEN", "BLOG", "CONTACT"];
  const dropNavs = ["MEN", "WOMEN", "BLOG"];

  const categories = useSelector<ApplicationState, CategoriesStateInterface>(
    state => state.CategoriesReducer
  );
  const womenCates = categories.filter(cate => cate.gender === "female")
  const menCates = categories.filter(cate => cate.gender === "male")
  const loading = useSelector<ApplicationState, boolean>(
    state => state.GlobalReducer.loading
  );

  useEffect(() => {
    if(!loading){
      if(nav === "MEN"){
        setDDNavs(menCates)
      } else if(nav === "WOMEN"){
        setDDNavs(womenCates)
      } else{
        setDDNavs([]);
      }
    }
  }, [nav])

  return (
    <div>
      <div
        className={classnames("grid-cols-3 w-screen")}
        style={{ display: show ? "grid" : "none", justifyItems: "center" }}
      >
        {navs.map(n => {
          return (
            <button
              className={classnames(
                "flex justify-center items-center px-2 ml-1 py-1 text-xs focus:outline-none",
                nav === n ? "bg-red-500 text-white" : "text-gray-700"
              )}
              onClick={() => setNav(n)}
            >
              {n}
              {dropNavs.includes(n) ? (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="h-3 w-3 ml-2"
                />
              ) : (
                ""
              )}
            </button>
          );
        })}
      </div>
      <div className={classnames("px-2 mt-2 grid grid-cols-2",
        show ? "grid pb-4" : "hidden"
      )} >
        {
          dropDownNavs.map(nav => {
            return (
              <Link to={`/category/${nav.name}`} className="border border-gray-700 px-2 uppercase text-gray-700">
                {nav.name}
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};
