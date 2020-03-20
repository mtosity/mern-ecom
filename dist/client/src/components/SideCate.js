"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SideCateLink_1 = require("./SideCate/SideCateLink");
//
function SideCate() {
    return (<div className="w-full h-full flex flex-col justify-center lg:text-xs border-2 font-bold rounded py-2 shadow">
            <SideCateLink_1.SideCateLink title="Automotive & Motorcycles"/>
            <SideCateLink_1.SideCateLink title="Electronic Devices"/>
            <SideCateLink_1.SideCateLink title="Electronic Devices"/>
            <SideCateLink_1.SideCateLink title="Electronic Devices"/>
            <SideCateLink_1.SideCateLink title="Electronic Devices"/>
            <SideCateLink_1.SideCateLink title="Electronic Devices"/>
            <SideCateLink_1.SideCateLink title="Electronic Devices"/>
            <SideCateLink_1.SideCateLink title="Electronic Devices"/>
        </div>);
}
exports.SideCate = SideCate;
