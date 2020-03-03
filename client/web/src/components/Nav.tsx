import React from "react";
import Search from './Search'

const Nav = () => {
  return (
    <div className="w-full h-32 overflow-hidden flex items-center">
      <a href="#" className="h-full items-center flex">
        <img
          src="https://i.ibb.co/s1GCt5h/shop-icon.png"
          alt="shop-icon"
          className="object-contain max-h-1/2"
        />
      </a>
      <h1>T1 shop</h1>
      <Search/>
    </div>
  );
};

export default Nav;
