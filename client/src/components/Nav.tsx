import React from "react";
import SearchBar from "./navbar/SearchBar";
import CartNav from "./navbar/CartNav";
import CartIcon from './navbar/CartIcon';
import OptionNav from './navbar/OptionsNav';

import Logo from "../images/logo.jpg";

const Nav = () => {
  return (
    <div>
    <OptionNav/>
    <div className="w-full flex md:flex-col items-center justify-center">
      <div className="">
        <a href="#">
          <img
            src={Logo}
            className="object-contain"
            style={{ width: "18rem" }}
            alt=""
          />
        </a>
      </div>
      <div
        className="w-2/3 h-10 md:w-full md:px-4 md:flex md:items-center"
        style={{ marginLeft: "1vw", marginRight: "1vw" }}
      >
        <SearchBar />
        <div className="hidden md:block mx-2">
          <CartIcon/>
        </div>
      </div>
      <div
        className="w-1/3 lg:w-1/2 md:hidden"
        style={{ marginLeft: "1vw"}}
      >
        <CartNav />
      </div>
    </div>
    </div>
  );
};

export default Nav;
