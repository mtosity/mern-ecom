import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CatalogDropDown } from "./CatalogDropDown";
import { BlogDropDown } from "./BlogDropDown";

export const NavLinks = () => {
  return (
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
  );
};
