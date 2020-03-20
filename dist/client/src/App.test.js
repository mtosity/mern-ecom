"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SearchBar_1 = __importDefault(require("./components/navbar/SearchBar"));
require("./css/tailwind.css");
require("./index.css");
function AppTest() {
    return (<div className="w-screen h-screen flex justify-center items-center">
            <SearchBar_1.default />
        </div>);
}
exports.default = AppTest;
