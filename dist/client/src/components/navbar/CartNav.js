"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CartIcon_1 = require("./CartIcon");
exports.CartNav = ({ className }) => {
    return (<a className="group w-full" href="#">
      <div className="pl-8 border border-blue-400 inline-block flex justify-between items-center">
        <div className="flex justify-center items-center flex-col w-full">
          <p className="font-bold">SHOPPING CART</p>
          <p className="text-xs lg:hidden">2 items - 122.38 €</p>
        </div>
        <CartIcon_1.CartIcon />
      </div>
      <div className="relative w-full z-10">
        <ul className="group-hover:opacity-100 group-hover:pointer-events-auto absolute bg-gray-200 rounded opacity-0 pointer-events-none 
      group-hover:transform group-hover:translate-y-0 translate-y-8 transition-all transform duration-500 ease-in-out
     top-0 right-0 w-full">
          <li>
            <p className="ml-4 text-xs mt-1">2 ITEMS IN MY CART</p>
          </li>
          <li>
            <a href="" className="p-4 inline-block px-8 hover:bg-gray-400 flex">
              <img src="https://i.imgur.com/ZyNl4uR.jpg" className="w-32 h-40 object-contain" alt=""/>
              <div>
                <p className="text-sm">Donec Ac Tempus</p>
                <p className="text-sm text-blue-800">61,19 €</p>
                <p className="text-sm">Quantity: 1</p>
              </div>
            </a>
          </li>
          <li>
            <a href="" className="p-4 inline-block px-8 hover:bg-gray-400 flex">
              <img src="https://i.imgur.com/ZyNl4uR.jpg" className="w-32 h-40 object-contain" alt=""/>
              <div>
                <p className="text-sm">Donec Ac Tempus</p>
                <p className="text-sm text-blue-800">61,19 €</p>
                <p className="text-sm">Quantity: 1</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </a>);
};
