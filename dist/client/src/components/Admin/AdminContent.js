"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.AdminContent = ({ children }) => {
    return (<div className=" bg-transparent absolute" style={{ top: '-120px', left: '280px', bottom: '0px', right: '40px' }}>
            {children}
        </div>);
};
