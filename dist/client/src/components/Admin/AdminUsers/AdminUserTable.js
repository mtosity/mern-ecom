"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AdminFuncTable_1 = require("../Content/AdminFuncTable");
exports.AdminUserTable = () => {
    const columns = [
        {
            name: "Email",
            selector: "email",
            sortable: true,
            allowOverflow: true,
        },
        {
            name: "Role",
            selector: "role",
            sortable: true,
            allowOverflow: true,
        },
        {
            name: "Name",
            selector: "name",
            sortable: true,
            allowOverflow: true,
        },
        {
            name: "Address",
            selector: "address",
            sortable: true,
            allowOverflow: true,
        },
        {
            name: "Avatar URL",
            selector: "avatar",
            sortable: true,
            allowOverflow: true,
        },
    ];
    return (<AdminFuncTable_1.AdminFuncTable columns={columns} tableName="user" tableTitle="User"/>);
};
