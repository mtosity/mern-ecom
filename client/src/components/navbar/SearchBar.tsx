import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <div
      className="flex focus:shadow-lg border border-red-400 rounded"
      style={{ height: "38px" }}
    >
      <div
        className="flex items-center justify-center bg-red-400 text-white w-32 md:w-24"
      >
        <p>Gategories</p>
        <FontAwesomeIcon className="w-3 h-3 ml-1" icon={faChevronDown} />
      </div>
      <input
        type="text"
        className="outline-none px-2 text-xs bg-white w-64 md:w-48"
        placeholder="What are you looking for?"
      ></input>
      <button
        type="submit"
        className="h-full outline-none bg-red-400"
        style={{ width: "50px" }}
      >
        <FontAwesomeIcon className="" icon={faSearch} color="white" />
      </button>
    </div>
  );
}
