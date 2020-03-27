import React from "react";
import { PopupIcon } from "./PopupIcon";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons";
import { ProductStars } from "../ProductDetail/ProductStars";
export const ProductCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col bg-white shadow-md mx-2 hover:shadow-2xl img-hover-darker relative group w-64">
        <img
          className=" object-cover w-64 h-64"
          src="https://preview.uideck.com/items/shopr-theme/assets/img/products/img-08.jpg"
          alt=""
        />
        <div
          className="absolute top-0 left-0 w-full h-64 flex justify-center items-center
      -translate-y-5 group-hover:translate-y-0 transform duration-500 ease-in-out"
        >
          <PopupIcon icon={faCartPlus} />
          <PopupIcon icon={faHeart} />
          <PopupIcon icon={faEye} />
        </div>
        <div className="w-56 px-1 py-2">
          <a
            href="#"
            className="text-lg font-semibold inline-block ml-4 py-1 hover:text-red-700"
          >
            Qui Ratione Volup
          </a>
          <div className="flex justify-between">
            <p className="font-semibold ml-4">$49.00</p>
            <ProductStars stars={4.5} onlyStars/>
          </div>
        </div>
      </div>
    </div>
  );
};
