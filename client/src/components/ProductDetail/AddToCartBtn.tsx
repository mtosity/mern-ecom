import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
  onClick: Function;
}

export const AddToCartBtn = ({ onClick }: props) => {
  return (
    <button
      className="flex justify-between font-bold items-center jo-font focus:outline-none px-6 py-3 
    bg-red-700 hover:bg-red-500 text-white shadow-lg transform duration-500 ml-4 items-center sm:px-4 sm:ml-0"
      onClick={() => onClick()}
    >
      <FontAwesomeIcon icon={faCartPlus} />
      <p className="ml-4 sm:ml-2">ADD TO CART</p>
    </button>
  );
};
