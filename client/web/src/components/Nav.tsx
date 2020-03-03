import React from "react";
import SearchBar from "./SearchBar";
import CartNav from "./CartNav";

import Logo from "../images/logo.jpg";

const Nav = () => {
  return (
    <div className="w-full h-24 flex items-center">
      <a href="#">
        <img
          src={Logo}
          className="object-contain"
          style={{ width: "18rem" }}
          alt=""
        />
      </a>
      <div className="w-1/2 h-10 mx-10">
        <SearchBar />
      </div>
      <div className="w-1/4 mx-10">
        <CartNav />
      </div>
    </div>
  );
};

export default Nav;
