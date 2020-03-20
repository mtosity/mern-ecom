"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PopupIcon_1 = require("./ProductCard/PopupIcon");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
exports.ProductCard = () => {
    return (<div className="flex flex-col bg-white shadow-md mx-2 hover:shadow-2xl img-hover-darker relative group">
      <img className=" object-cover w-64 h-64" src="https://preview.uideck.com/items/shopr-theme/assets/img/products/img-08.jpg" alt=""/>
      <div className="absolute top-0 left-0 w-64 h-64 flex justify-center items-center
      -translate-y-5 group-hover:translate-y-0 transform duration-500 ease-in-out">
        <PopupIcon_1.PopupIcon icon={free_solid_svg_icons_1.faCartPlus}/>
        <PopupIcon_1.PopupIcon icon={free_regular_svg_icons_1.faHeart}/>
        <PopupIcon_1.PopupIcon icon={free_regular_svg_icons_1.faEye}/>
      </div>
      <div className="w-56">
        <a href="#" className="text-lg font-semibold inline-block m-4 hover:text-red-700">
          Qui Ratione Volup
        </a>
        <div className="flex justify-between">
          <p className="font-semibold ml-4">$49.00</p>
          <p className="mr-4 mb-4 ">$49.00</p>
        </div>
      </div>
    </div>);
};
