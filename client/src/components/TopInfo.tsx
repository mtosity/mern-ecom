import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPhoneAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import SearchBar from "./navbar/SearchBar";

export const TopInfo = () => {
  return (
    <div
      className="w-full flex justify px-16 md:px-4"
      style={{
        height: "58px",
        backgroundColor: "#F5F5F5",
        fontFamily: "Open Sans"
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center md:hidden">
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
          <div className="flex items-center cursor-pointer inline-block ml-8 lg:hidden">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              color="hitw"
              className=" w-3 h-3"
            />
            <p className="ml-1">Call Us: (123) 456- 789</p>
          </div>
        </div>
        <div className="flex md:w-full md:justify-center">
          <SearchBar />

          <div
            style={{ width: "38px", height: "38px" }}
            className="bg-black flex justify-center items-center ml-8"
          >
            <FontAwesomeIcon className="" icon={faHeart} color="white" />
          </div>
          <div
            style={{ width: "38px", height: "38px" }}
            className="bg-black flex justify-center items-center ml-1"
          >
            <FontAwesomeIcon className="" icon={faShoppingCart} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
