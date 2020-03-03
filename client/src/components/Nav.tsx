import React from "react";
import SearchBar from "./navbar/SearchBar";
import {CartNav} from "./navbar/CartNav";
import {CartIcon} from './navbar/CartIcon';
import {OptionsNav} from './navbar/OptionsNav';

import Logo from "../images/trade.png";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
    <OptionsNav/>
    <div className="w-full flex md:flex-col items-center justify-center mt-2">
      <Link to="/" className=" pl-2 flex items-center">
        <div>
          <img
            src={Logo}
            className="object-contain"
            style={{ height: "5rem" }}
            alt=""
          />
        </div>
        <div className="flex-col items-center w-64 h-full justify-center text-center">
          <p className="tracking-wide	font-bold">MINHTAMOShop</p>
          <p>Cheap, Good, Fast Buy</p>
        </div>
      </Link>
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
        className="w-1/3 lg:w-1/2 md:hidden mr-2"
        style={{ marginLeft: "1vw"}}
      >
        <CartNav />
      </div>
    </div>
    </div>
  );
};
