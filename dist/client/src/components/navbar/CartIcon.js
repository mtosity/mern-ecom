"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
function CartIcon() {
    return (<a className="bg-blue-400 ml-4 p-3" href="#">
          <react_fontawesome_1.FontAwesomeIcon size="lg" icon={free_solid_svg_icons_1.faShoppingCart} color="white"/>
        </a>);
}
exports.CartIcon = CartIcon;
