import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { CategoriesStateInterface } from "../../Reducers/CategoriesReducer";
import useOutsideClick from "../../utils/useOutsideClick";
import { Link, useHistory } from "react-router-dom";

export default function SearchBar() {
  const ref = useRef(null);
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [selectedCate, selecteCate] = useState("all");
  const categories = useSelector<ApplicationState, CategoriesStateInterface>(
    state => state.CategoriesReducer
  );
  const categoriesAndAll = [{ id: "allid", name: "all" }, ...categories];
  const [query, setQuery] = useState("");

  useOutsideClick(ref, () => {
    setShow(false);
  });

  return (
    <div
      className="flex focus:shadow-lg border border-red-600 rounded"
      ref={ref}
    >
      <div>
        <button
          className="flex items-center justify-center bg-red-600 text-white sm:text-xs w-32 focus:outline-none sm:w-24 sm:text-xs py-1"
          onClick={() => setShow(!show)}
        >
          <p className="uppercase">{selectedCate.split(" ")[0]}</p>
          <FontAwesomeIcon className="ml-1" icon={faChevronDown} size="sm" />
        </button>
        <div className="relative">
          {show ? (
            <div className="absolute top-1 left-0 z-30 bg-white shadow w-32 sm:w-24 sm:text-xs">
              {categoriesAndAll.map(cate => {
                const catename = cate.name.split(" ")[0];
                return (
                  <div
                    className="hover:bg-gray-600 hover:text-white text-center uppercase py-1 px-2 cursor-pointer sm:py-1"
                    key={`search${cate.id}`}
                    onClick={() => {
                      selecteCate(cate.name);
                      setShow(!show);
                    }}
                  >
                    {catename}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <input
        type="text"
        className="outline-none px-2 text-xs bg-white w-64 md:w-40 py-0"
        placeholder="What are you looking for?"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") {
            history.push(`/category/${selectedCate}?q=${query}`);
          }
        }}
      ></input>
      <Link
        to={`/category/${selectedCate}?q=${query}`}
        type="submit"
        className="outline-none bg-red-600 px-2 flex items-center"
      >
        <FontAwesomeIcon className="" icon={faSearch} color="white" size="sm" />
      </Link>
    </div>
  );
}
