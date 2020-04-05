import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { CategoriesStateInterface } from "../../Reducers/CategoriesReducer";
import { CategoryType } from "../../DataType";
import { Link, useHistory } from "react-router-dom";
import useOutsideClick from "../../utils/useOutsideClick";

interface props {
  show: boolean;
}

export const NavLinksMobile = ({ show }: props) => {
  const history = useHistory();
  const [nav, setNav] = useState("HOME");
  const [dropDownNavs, setDDNavs] = useState<Array<CategoryType>>([]);
  const navs = ["HOME", "MEN", "WOMEN", "ORDERS"];
  const dropNavs = ["MEN", "WOMEN"];

  const categories = useSelector<ApplicationState, CategoriesStateInterface>(
    (state) => state.CategoriesReducer
  );
  const womenCates = categories.filter((cate) => cate.gender === "female");
  const menCates = categories.filter((cate) => cate.gender === "male");
  const loading = useSelector<ApplicationState, boolean>(
    (state) => state.GlobalReducer.loading
  );

  useEffect(() => {
    if (!loading) {
      if (nav === "HOME") {
        history.push("/");
      } else if (nav === "ORDERS") {
        history.push("/orders");
      }
      if (nav === "MEN") {
        setDDNavs(menCates);
      } else if (nav === "WOMEN") {
        setDDNavs(womenCates);
      } else {
        setDDNavs([]);
      }
    }
  }, [nav]);

  return (
    <div className="hidden md:block">
      <div
        className={classnames("grid-cols-4 w-screen")}
        style={{ display: show ? "grid" : "none", justifyItems: "center" }}
      >
        {navs.map((n) => {
          return (
            <button
              key={`mobilenav${n}`}
              className={classnames(
                "flex justify-center items-center w-full ml-1 py-1 text-sm focus:outline-none",
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
      <div
        className={classnames(
          "px-2 mt-2 grid grid-cols-2",
          show ? "grid pb-4" : "hidden"
        )}
      >
        {dropDownNavs.map((nav) => {
          return (
            <Link
              key={nav.id}
              to={`/category/${nav.name}`}
              className="border border-red-400 text-red-600 px-2 uppercase text-gray-700"
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
