"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
function SearchBar() {
    return (<div className="flex focus:shadow-lg border border-red-400 rounded" style={{ height: "38px" }}>
      <div className="flex items-center justify-center bg-red-400 text-white w-32 md:w-24">
        <p>Categories</p>
        <react_fontawesome_1.FontAwesomeIcon className="w-3 h-3 ml-1" icon={free_solid_svg_icons_1.faChevronDown}/>
      </div>
      <input type="text" className="outline-none px-2 text-xs bg-white w-64 md:w-48" placeholder="What are you looking for?"></input>
      <button type="submit" className="h-full outline-none bg-red-400" style={{ width: "40px" }}>
        <react_fontawesome_1.FontAwesomeIcon className="" icon={free_solid_svg_icons_1.faSearch} color="white"/>
      </button>
    </div>);
}
exports.default = SearchBar;
