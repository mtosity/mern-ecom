import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStoreAlt,
  faCaretDown,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { AccountNav } from "./TopNav/AccountNav";
import { Link } from "react-router-dom";
import { NavLinks } from "./TopNav/NavLinks";
import { NavLinksMobile } from "./TopNav/NavLinksMobile";
import useOutsideClick from "../utils/useOutsideClick";
import { CartDropDown } from "./TopInfo/CartDropDown";

export const TopNav = () => {
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef(null);
  useOutsideClick(cartRef, () => {
    setShowCart(false);
  });
  const [showMbNav, setShowMbNav] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setShowMbNav(false);
  });

  return (
    <div
      className=" top-0 sticky z-20 shadow"
      style={{ backgroundColor: "#FFFDF2" }}
      ref={ref}
    >
      <div
        className="w-full flex items-center px-16 justify-between md:px-8 sm:px-2"
        style={{ height: "58px" }}
      >
        {/* LOGO */}
        <div className="flex items-center">
          <Link className="flex items-center" to="/">
            <FontAwesomeIcon icon={faStoreAlt} size="2x" color="red" />
            <p className="text-xl text-red-600 font-bold ml-2 sm:hidden">
              MTOS
            </p>
            <p className="text-lg text-red-400 sm:hidden">hop</p>
          </Link>
          <NavLinks />
        </div>
        <div className="flex items-center">
          <button className="bg-red-600 flex justify-center items-center focus:outline-none w-8 h-8 rounded">
            <FontAwesomeIcon
              className=""
              icon={faHeart}
              color="white"
              size="sm"
            />
          </button>
          <button
            className="bg-red-600 flex justify-center items-center ml-1 focus:outline-none relative cursor-pointer w-8 h-8 rounded"
            ref={cartRef}
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
          <div className="ml-2">
            <AccountNav />
          </div>
          <button
            className="flex items-center justify-center border border-red-400 rounded hidden lg:inline-block focus:outline-none h-8 w-16 ml-2"
            onClick={() => setShowMbNav(!showMbNav)}
          >
            <FontAwesomeIcon icon={faCaretDown} color="red" />
          </button>
        </div>
      </div>
      <NavLinksMobile show={showMbNav} />
    </div>
  );
};
