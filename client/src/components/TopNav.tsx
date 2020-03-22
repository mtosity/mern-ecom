import React, { useState } from "react";
import Logo from "../images/trade.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faStoreAlt,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { CatalogDropDown } from "./TopNav/CatalogDropDown";
import { BlogDropDown } from "./TopNav/BlogDropDown";
import { useDispatch } from "react-redux";
import { GlobalActionType } from "../Actions";
import { AccountNav } from "./TopNav/AccountNav";

export const TopNav = () => {
  const dispatcher = useDispatch();
  return (
    <div
      className="w-full flex items-center px-16 justify-between md:px-8"
      style={{ height: "82px" }}
    >
      {/* LOGO */}
      <div className="flex items-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faStoreAlt} size="2x" color="red" />
          <p className="text-xl text-red-600 font-bold ml-2">MTOS</p>
          <p className="text-lg text-red-400">hop</p>
        </div>
        <div className="flex ml-4 items-center lg:hidden">
          <a
            href="#"
            className="inline-block px-4 ml-4 py-3 hover:bg-red-500 hover:text-white text-gray-700"
          >
            HOME
          </a>
          <a
            href="#"
            className="inline-block px-4 ml-4 py-3 hover:bg-red-500 hover:text-white text-gray-700"
          >
            ABOUT
          </a>
          <div className="group">
            <a
              href="#"
              className="flex items-center hover:bg-red-500 hover:text-white text-gray-700 px-4 ml-4 py-3"
            >
              CATALOG
              <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 ml-2" />
            </a>
            <CatalogDropDown />
          </div>
          <div className="group">
            <a
              href="#"
              className="inline-block px-4 ml-4 py-3 hover:bg-red-500 hover:text-white text-gray-700"
            >
              BLOG
              <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 ml-2" />
            </a>
            <BlogDropDown />
          </div>
          <a
            href="#"
            className="inline-block px-4 ml-4 py-3 hover:bg-red-500 hover:text-white text-gray-700"
          >
            CONTACT
          </a>
        </div>
      </div>
      <div className="flex">
        <AccountNav/>
        <div className="py-2 px-8 flex items-center border border-red-400 rounded hidden lg:inline-block ml-4">
          <FontAwesomeIcon icon={faCaretDown} color="red" />
        </div>
      </div>
    </div>
  );
};
