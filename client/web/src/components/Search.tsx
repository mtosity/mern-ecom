import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Search() {
  return (
    <div className="w-1/3">
      <div className="w-full flex h-12 focus:shadow-lg">
        <input
          type="text"
          className="w-full border-solid border-2 border-blue-400 outline-none focus:text-blue-600 rounded-l-lg bg-gray-200 focus:bg-white px-2 "
          placeholder="What are you looking for?"
          style={{borderRight: 'none'}}
        ></input>
        <button type="submit" className="h-full px-4 bg-blue-400 outline-none focus:outline-none active:bg-blue-700 rounded-r-lg">
            <FontAwesomeIcon className="" icon={faSearch}/>
        </button>
      </div>
    </div>
  );
}
