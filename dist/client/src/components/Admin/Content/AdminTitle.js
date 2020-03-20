"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.AdminTitle = ({ title, color }) => {
    return (<div>
            <h1 className="text-admin-title pb-8 pl-8 font-hairline tracking-wider" style={{ color: color }}>{title}</h1>
        </div>);
};
