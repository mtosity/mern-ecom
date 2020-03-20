"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AdminFuncTable_1 = require("../Content/AdminFuncTable");
exports.AdminProductTable = () => {
    const columns = [
        {
            name: "Title",
            selector: "title",
            sortable: true
        },
        {
            name: "Quantity",
            selector: "quantity",
            sortable: true
        },
        {
            name: "Original price",
            selector: "originPrice",
            sortable: true
        },
        {
            name: "Sale price",
            selector: "salePrice",
            sortable: true
        },
        {
            name: "Gender",
            selector: "gender",
            sortable: true
        },
    ];
    return (<AdminFuncTable_1.AdminFuncTable columns={columns} tableName="product" tableTitle="Category"/>);
};
