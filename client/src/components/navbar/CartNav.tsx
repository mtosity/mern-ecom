import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartIcon from './CartIcon'

interface CartNavProps {
  className?: string;
}

const CartNav: FunctionComponent<CartNavProps> = ({
  className
}: CartNavProps) => {
  return (
    <a className="group w-full" href="#">
      <div className="pl-8 border border-blue-400 inline-block flex justify-between items-center relative">
        <div className="flex justify-center items-center flex-col w-full">
          <p className="font-bold">SHOPPING CART</p>
          <p className="text-xs">2 items - 122.38 €</p>
        </div>
        <CartIcon/>
      </div>
      <div className="relative w-full z-10">
        <ul
          className="group-hover:opacity-100 group-hover:pointer-events-auto absolute bg-gray-200 rounded opacity-0 pointer-events-none 
      group-hover:transform group-hover:translate-y-0 translate-y-8 transition-all transform duration-500 ease-in-out
     top-0 right-0 w-full"
        >
          <li>
            <p className="ml-4 text-xs mt-1">2 ITEMS IN MY CART</p>
          </li>
          <li>
            <a href="" className="p-4 inline-block px-8 hover:bg-gray-400 flex">
              <img
                src="https://i.imgur.com/ZyNl4uR.jpg"
                className="w-32 h-40 object-contain"
                alt=""
              />
              <div>
                <p className="text-sm">Donec Ac Tempus</p>
                <p className="text-sm text-blue-800">61,19 €</p>
                <p className="text-sm">Quantity: 1</p>
              </div>
            </a>
          </li>
          <li>
            <a href="" className="p-4 inline-block px-8 hover:bg-gray-400 flex">
              <img
                src="https://i.imgur.com/ZyNl4uR.jpg"
                className="w-32 h-40 object-contain"
                alt=""
              />
              <div>
                <p className="text-sm">Donec Ac Tempus</p>
                <p className="text-sm text-blue-800">61,19 €</p>
                <p className="text-sm">Quantity: 1</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </a>
  );
};

export default CartNav;
