import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPhoneAlt,
  faShoppingCart,
  faStoreAlt
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import SearchBar from "./navbar/SearchBar";
import { CartDropDown } from "./TopInfo/CartDropDown";
import { Link } from "react-router-dom";
import useOutsideClick from "../utils/useOutsideClick";
import { NavLinks } from "./TopNav/NavLinks";

export const TopInfo = () => {
  return (
    <div
      className="w-screen flex justify px-16 py-4 md:px-8 sm:px-2 sm:py-4"
      style={{
        backgroundColor: "#F5F5F5",
        fontFamily: "Open Sans"
      }}
    >
      <div className="flex items-center justify-between w-full sm:justify-center">
        <div className="flex items-center sm:hidden">
          {/* langues */}
          <div className="flex items-center cursor-pointer">
            <img
              src="https://preview.uideck.com/items/shopr-theme/assets/img/language/flag-lang.png"
              alt=""
              style={{ width: "16px", height: "11px" }}
            />
            <p className="ml-2">English</p>
            <FontAwesomeIcon icon={faChevronDown} className=" w-2 h-2" />
          </div>
          {/* Currency */}
          <div className="flex items-center cursor-pointer inline-block ml-8">
            <p>$USD</p>
            <FontAwesomeIcon icon={faChevronDown} className=" w-2 h-2" />
          </div>
          {/* Currency */}
          <div className="flex items-center cursor-pointer inline-block ml-8 md:hidden">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              color="hitw"
              className=" w-3 h-3"
            />
            <p className="ml-1">Call Us: (123) 456- 789</p>
          </div>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};
