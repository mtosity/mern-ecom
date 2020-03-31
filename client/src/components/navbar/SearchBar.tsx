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
      className="flex focus:shadow-lg border border-red-600 rounded"
    >
      <div
        className="flex items-center justify-center bg-red-600 text-white sm:text-xs p-2 sm:py-0"
      >
        <p>Categories</p>
        <FontAwesomeIcon className="ml-1" icon={faChevronDown} />
      </div>
      <input
        type="text"
        className="outline-none px-2 text-xs bg-white w-64 md:w-48"
        placeholder="What are you looking for?"
      ></input>
      <button
        type="submit"
        className="outline-none bg-red-600"
      >
        <FontAwesomeIcon className="" icon={faSearch} color="white" />
      </button>
    </div>
  );
}
