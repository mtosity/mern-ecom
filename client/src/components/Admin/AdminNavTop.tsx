import React from "react";

import Logo from "../../images/trade.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

export const AdminNavTop = () => {
  return (
    <div className=" w-screen p-2 h-64 flex justify-around bg-admin-topnav">
      <div className="w-full flex h-16 items-center justify-around">
        <div className="flex items-center">
          <img src={Logo} alt="" className="w-12 h-12" />
          <p className="ml-4 text-admin-title text-2xl">Admin minhtamoshop</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon className="text-admin-title" icon={faSearch} />
          <input
            type="search"
            name=""
            id=""
            placeholder="search..."
            className="ml-2 outline-none text-sm h-8 w-56 ml-4 text-admin-word bg-admin-topnav"
          />
          <FontAwesomeIcon icon={faBell} className="ml-4 text-admin-title" />
        </div>
      </div>
    </div>
  );
};
