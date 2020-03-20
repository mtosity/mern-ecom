"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const _404_png_1 = __importDefault(require("../images/404.png"));
exports.FOF = () => {
    return (<div className="flex w-full justify-center">
            <img src={_404_png_1.default} alt="" className="block"/>
        </div>);
};
