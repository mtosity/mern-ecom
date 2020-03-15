import React from "react";
import Logo from "../images/trade.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const TopNav = () => {
  return (
    <div
      className="w-full flex items-center px-16 justify-between"
      style={{ height: "82px" }}
    >
      {/* LOGO */}
      <div className="flex items-center">
        <div className="flex items-center">
          <img src={Logo} alt="" style={{ height: "50px", width: "50px" }} />
          <p className="text-xl text-red-600 font-bold">MTOS</p>
          <p className="text-lg text-red-400">hop</p>
        </div>
        <ul className="flex ml-4 items-center">
          <li>
            <a
              href="#"
              className="inline-block px-8 py-3 hover:bg-red-500 hover:text-white text-gray-700"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block px-8 py-3 hover:bg-red-500 hover:text-white text-gray-700"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="inline-block text-gray-700 relative group">
              <div className="flex items-center hover:bg-red-500 hover:text-white px-8 py-3">
                CATALOG
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="h-3 w-3 ml-2"
                />
              </div>
              <div className="relative z-10">
                <div
                  className="absolute top-0 left-0 opacity-0 
                group-hover:opacity-100
                group-hover:transform group-hover:translate-y-0 translate-y-8 transition-all transform duration-500 ease-in-out"
                  style={{ top: "30px" }}
                >
                  hi
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block px-8 py-3 hover:bg-red-500 hover:text-white text-gray-700"
            >
              BLOG
              <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 ml-2" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block px-8 py-3 hover:bg-red-500 hover:text-white text-gray-700"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div className="py-2 px-8 flex items-center border border-red-400 rounded">
        <FontAwesomeIcon icon={faUser} color="red" />
        <p className="ml-2 text-red-600">Account</p>
        <FontAwesomeIcon icon={faChevronDown} className="ml-2" color="red" />
      </div>
    </div>
  );
};
