"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const trade_png_1 = __importDefault(require("../../images/trade.png"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
exports.AdminNavTop = () => {
    return (<div className=" w-screen p-2 h-64 flex justify-around bg-admin-topnav">
      <div className="w-full flex h-16 items-center justify-around">
        <div className="flex items-center">
          <img src={trade_png_1.default} alt="" className="w-12 h-12"/>
          <p className="ml-4 text-admin-title">Dashboard</p>
        </div>
        <div className="flex items-center">
          <react_fontawesome_1.FontAwesomeIcon className="text-admin-title" icon={free_solid_svg_icons_1.faSearch}/>
          <input type="search" name="" id="" placeholder="search..." className="ml-2 outline-none text-sm h-8 ml-4 text-admin-word bg-admin-topnav"/>
          <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faBell} className="ml-4 text-admin-title"/>
        </div>
      </div>
    </div>);
};
