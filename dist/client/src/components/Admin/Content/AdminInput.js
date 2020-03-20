"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
exports.AdminInput = ({ classname, placeholder, name, type, textarea, value, onChange }) => {
    return textarea ? (<textarea rows={3} className={classnames_1.default(classname, "p-2 mb-4 text-admin-input rounded border border-admin-word bg-admin-card text-sm w-1/2 outline-none focus:border-admin-input")} name={name} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>) : (<input type={type} name={name} placeholder={placeholder} className={classnames_1.default(classname, "p-2 mb-4 text-admin-input rounded border border-admin-word bg-admin-card text-sm w-1/2 outline-none focus:border-admin-input")} value={value} onChange={(e) => onChange(e.target.value)}/>);
};
