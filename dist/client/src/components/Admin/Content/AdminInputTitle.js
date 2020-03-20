"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
exports.AdminInputTitle = ({ classname, title }) => {
    return (<p className={classnames_1.default("text-admin-input mr-4 mb-1", classname)}>
          {title}
        </p>);
};
