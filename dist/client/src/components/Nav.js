"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TopInfo_1 = require("./TopInfo");
const TopNav_1 = require("./TopNav");
exports.Nav = () => {
    return (<div>
      <TopInfo_1.TopInfo />
      <TopNav_1.TopNav />
      
    </div>);
};
