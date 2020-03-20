"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.MiddleTitle = ({ title }) => {
    return (<div className="w-full flex justify-center items-center flex-col mt-8">
      <h1 className="jo-font font-extrabold text-5xl">{title}</h1>
      <div className="h-20 border-t-2 border-red-600 w-20"></div>
    </div>);
};
