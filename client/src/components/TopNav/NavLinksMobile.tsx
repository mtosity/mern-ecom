import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CatalogDropDown } from "./CatalogDropDown";
import { BlogDropDown } from "./BlogDropDown";
import classnames from "classnames";

interface props {
  show: boolean;
}

export const NavLinksMobile = ({ show }: props) => {
  return (
    <div className={classnames("", show ? "flex items-center justify-center" : "hidden")}>
      <a
        href="#"
        className="inline-block px-2 ml-1 py-1 hover:bg-red-500 hover:text-white text-gray-700 text-xs"
      >
        HOME
      </a>
      <a
        href="#"
        className="inline-block px-2 ml-1 py-1 hover:bg-red-500 hover:text-white text-gray-700 text-xs"
      >
        ABOUT
      </a>
      <div className="group">
        <a
          href="#"
          className="flex items-center hover:bg-red-500 hover:text-white text-gray-700 px-2 py-1 ml-1 text-xs"
        >
          CATALOG
          <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 ml-2" />
        </a>
        <CatalogDropDown />
      </div>
      <div className="group">
        <a
          href="#"
          className="inline-block px-2 ml-1 py-1 hover:bg-red-500 hover:text-white text-gray-700 text-xs"
        >
          BLOG
          <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 ml-2" />
        </a>
        <BlogDropDown />
      </div>
      <a
        href="#"
        className="inline-block px-2 ml-1 py-1 hover:bg-red-500 hover:text-white text-gray-700 text-xs"
      >
        CONTACT
      </a>
    </div>
  );
};
