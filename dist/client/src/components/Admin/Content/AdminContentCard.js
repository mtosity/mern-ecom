"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.AdminContentCard = ({ children }) => {
    return (<div className="text-blue-100 w-full mb-8 p-2 bg-admin-card rounded shadow-lg px-8 py-4">
            {children}
        </div>);
};
