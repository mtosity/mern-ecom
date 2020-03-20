"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const react_router_dom_1 = require("react-router-dom");
exports.AdminSideNavLink = ({ icon, iconColor, title, to }) => {
    return (<react_router_dom_1.NavLink to={to} activeStyle={{ color: iconColor }} activeClassName="bg-admin-topnav" className="flex items-center w-full p-4 group faCubes rounded text-admin-word">
      <react_fontawesome_1.FontAwesomeIcon icon={icon} color={iconColor}/>
      <p className="ml-4 font-hairline text-sm group-hover:text-admin-title">
        {title}
      </p>
    </react_router_dom_1.NavLink>);
};
