import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPhoneAlt,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import SearchBar from "./navbar/SearchBar";
import { CartDropDown } from "./TopInfo/CartDropDown";
import useOutsideClick from "../utils/useOutsideClick";

export const TopInfo = () => {
  const [showCart, setShowCart] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setShowCart(false);
  });
  return (
    <div
      className="w-screen flex justify px-16 py-4 md:px-4 sm:px-2 sm:py-4"
      style={{
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
        <div className="flex md:w-full md:justify-around">
          <SearchBar />

          <button 
            className="bg-black flex justify-center items-center ml-8 focus:outline-none px-2 sm:ml-2 sm:p-1"
          >
            <FontAwesomeIcon
              className=""
              icon={faHeart}
              color="white"
              size="sm"
            />
          </button>
          <button
            className="bg-black flex justify-center items-center ml-1 focus:outline-none relative cursor-pointer px-2 sm:ml-2 sm:p-1"
            ref={ref}
            onClick={() => setShowCart(!showCart)}
          >
            <FontAwesomeIcon
              className=""
              icon={faShoppingCart}
              color="white"
              size="sm"
            />
            <CartDropDown show={showCart} />
          </button>
        </div>
      </div>
    </div>
  );
};
