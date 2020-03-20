"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
exports.TopNav = () => {
    return (<div className="w-full flex items-center px-16 justify-between md:px-8" style={{ height: "82px" }}>
      
      <div className="flex items-center">
        <div className="flex items-center">
          <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faStoreAlt} size="2x" color="red"/>
          <p className="text-xl text-red-600 font-bold ml-2">MTOS</p>
          <p className="text-lg text-red-400">hop</p>
        </div>
        <div className="flex ml-4 items-center lg:hidden">
          <a href="#" className="inline-block px-4 ml-4 py-3 hover:bg-red-500 hover:text-white text-gray-700">
            HOME
          </a>
          <a href="#" className="inline-block px-4 ml-4 py-3 hover:bg-red-500 hover:text-white text-gray-700">
            ABOUT
          </a>
          <div className="group">
            <a href="#" className="flex items-center hover:bg-red-500 hover:text-white text-gray-700 px-4 ml-4 py-3">
              CATALOG
              <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faChevronDown} className="h-3 w-3 ml-2"/>
            </a>
            <div className="relative z-10">
              <div className="absolute top-0 left-0 opacity-0 
                border-t border-red-400
                group-hover:opacity-100
                group-hover:transform group-hover:translate-y-0 translate-y-8 transition-all transform duration-500 ease-in-out
                w-full h-32 bg-blue-200
                " style={{ top: "18px" }}>
                hi
              </div>
            </div>
          </div>
          <a href="#" className="inline-block px-4 ml-4 py-3 hover:bg-red-500 hover:text-white text-gray-700">
            BLOG
            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faChevronDown} className="h-3 w-3 ml-2"/>
          </a>
          <a href="#" className="inline-block px-4 ml-4 py-3 hover:bg-red-500 hover:text-white text-gray-700">
            CONTACT
          </a>
        </div>
      </div>
      <div className="flex">
        <div className="py-2 px-8 flex items-center border border-red-400 rounded">
          <react_fontawesome_1.FontAwesomeIcon icon={free_regular_svg_icons_1.faUser} color="red"/>
          <p className="ml-2 text-red-600 md:hidden">Account</p>
          <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faChevronDown} className="ml-2 md:hidden" color="red"/>
        </div>
        <div className="py-2 px-8 flex items-center border border-red-400 rounded hidden lg:inline-block ml-4">
          <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faCaretDown} color="red"/>
        </div>
      </div>
    </div>);
};
