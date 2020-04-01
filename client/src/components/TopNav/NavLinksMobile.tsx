import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

interface props {
  show: boolean;
}

export const NavLinksMobile = ({ show }: props) => {
  const [nav, setNav] = useState("");
  const navs = ["HOME", "ABOUT", "MEN", "WOMEN", "BLOG", "CONTACT"];
  const dropNavs = ["MEN", "WOMEN", "BLOG"]
  return (
    <div>
      <div
        className={classnames(
          "",
          show ? "flex items-center justify-center" : "hidden"
        )}
      >
        {navs.map(n => {
          return (
            <button 
              className="flex px-2 ml-1 py-1 hover:bg-red-500 hover:text-white text-gray-700 text-xs focus:outline-none"
              onClick={() => setNav(n)}
            >
              {n}
              {
                dropNavs.includes(n) ? 
                <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 ml-2" />
                : 
                ""
              }
            </button>
          );
        })}
      </div>
      <div className="">{nav}</div>
    </div>
  );
};
