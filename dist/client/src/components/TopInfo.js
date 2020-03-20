"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
const SearchBar_1 = __importDefault(require("./navbar/SearchBar"));
exports.TopInfo = () => {
    return (<div className="w-full flex justify px-16 md:px-4" style={{
        height: "58px",
        backgroundColor: "#F5F5F5",
        fontFamily: "Open Sans"
    }}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center md:hidden">
          
          <div className="flex items-center cursor-pointer">
            <img src="https://preview.uideck.com/items/shopr-theme/assets/img/language/flag-lang.png" alt="" style={{ width: "16px", height: "11px" }}/>
            <p className="ml-2">English</p>
            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faChevronDown} className=" w-2 h-2"/>
          </div>
          
          <div className="flex items-center cursor-pointer inline-block ml-8">
            <p>$USD</p>
            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faChevronDown} className=" w-2 h-2"/>
          </div>
          
          <div className="flex items-center cursor-pointer inline-block ml-8 lg:hidden">
            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faPhoneAlt} color="hitw" className=" w-3 h-3"/>
            <p className="ml-1">Call Us: (123) 456- 789</p>
          </div>
        </div>
        <div className="flex md:w-full md:justify-center">
          <SearchBar_1.default />

          <div style={{ width: "38px", height: "38px" }} className="bg-black flex justify-center items-center ml-8">
            <react_fontawesome_1.FontAwesomeIcon className="" icon={free_regular_svg_icons_1.faHeart} color="white"/>
          </div>
          <div style={{ width: "38px", height: "38px" }} className="bg-black flex justify-center items-center ml-1">
            <react_fontawesome_1.FontAwesomeIcon className="" icon={free_solid_svg_icons_1.faShoppingCart} color="white"/>
          </div>
        </div>
      </div>
    </div>);
};
