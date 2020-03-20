"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
exports.AdminButton = ({ title, onClick, classname }) => {
    return (<button className={classnames_1.default("text-admin-title rounded focus:outline-none py-1 active:bg-blue-400 px-4 bg-admin-card adtive:bg-admin-topnav hover:bg-admin-card border-admin-word border hover:border-admin-input", classname)} onClick={e => onClick(e)}>
      {title}
    </button>);
};
