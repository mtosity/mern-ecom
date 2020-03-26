import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStoreAlt,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import { AccountNav } from "./TopNav/AccountNav";
import { Link } from "react-router-dom";
import { NavLinks } from "./TopNav/NavLinks";
import { NavLinksMobile } from "./TopNav/NavLinksMobile";

export const TopNav = () => {
  const [showMbNav, setShowMbNav] = useState(false);
  return (
    <div className=" top-0 sticky z-20 shadow" style={{backgroundColor: '#FFFDF2'}}>
      <div
        className="w-full flex items-center px-16 justify-between md:px-8"
        style={{ height: "58px" }}
      >
        {/* LOGO */}
        <div className="flex items-center">
          <Link className="flex items-center" to="/">
            <FontAwesomeIcon icon={faStoreAlt} size="2x" color="red" />
            <p className="text-xl text-red-600 font-bold ml-2">MTOS</p>
            <p className="text-lg text-red-400">hop</p>
          </Link>
          <NavLinks />
        </div>
        <div className="flex">
          <AccountNav />
          <button className="py-2 px-8 flex items-center justify-center border border-red-400 rounded hidden lg:inline-block ml-4 md:py-0 focus:outline-none"
            onClick={() => setShowMbNav(!showMbNav)}
          >
            <FontAwesomeIcon icon={faCaretDown} color="red" />
          </button>
        </div>
      </div>
      <NavLinksMobile show={showMbNav}/>
    </div>
  );
};
