import React from "react";

import Logo from "../../images/trade.png";
import { Colors } from "../../utils/AdminColor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

export const NavTop = () => {
  return (
    <div className=" w-screen p-2 h-64 flex justify-around bg-admin-topnav">
      <div className="w-full flex h-16 items-center justify-around">
        <div className="flex items-center">
          <img src={Logo} alt="" className="w-12 h-12" />
          <p style={{ color: Colors.Title }} className="ml-4">Dashboard</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon color={Colors.Title} icon={faSearch} />
          <input
            style={{ backgroundColor: Colors.TopNav, color: Colors.Title }}
            type="search"
            name=""
            id=""
            placeholder="search..."
            className="ml-2 outline-none text-sm h-8 ml-4"
          />
          <FontAwesomeIcon color={Colors.Title} icon={faBell} className="ml-4" />
        </div>
      </div>
    </div>
  );
};
