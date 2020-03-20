"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AdminFuncTable_1 = require("../Content/AdminFuncTable");
exports.AdminCategoryTable = () => {
    const columns = [
        {
            name: "Name",
            selector: "name",
            sortable: true
        },
        {
            name: "Created At",
            selector: "createdAt",
            sortable: true
        },
        {
            name: "Updated At",
            selector: "updatedAt",
            sortable: true
        }
    ];
    return (<AdminFuncTable_1.AdminFuncTable columns={columns} tableName="category" tableTitle="Category"/>);
};
