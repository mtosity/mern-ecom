import React from "react";
import Search from "./Search";
import CartNav from "./CartNav";

import Logo from '../images/logo.jpg'

const Nav = () => {
  return (
    <div className="w-full h-20 flex items-center px-2">
      <img src={Logo} className="h-20 w-20" alt=""/>
      <div className="w-2/3 h-10">
        <Search />
      </div>
      <div className="w-1/3 mx-20">
        <CartNav />
      </div>
    </div>
  );
};

export default Nav;
