"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AdminContent_1 = require("../../components/Admin/AdminContent");
const AdminContentCard_1 = require("../../components/Admin/Content/AdminContentCard");
const AdminTitle_1 = require("../../components/Admin/Content/AdminTitle");
const AddUserForm_1 = require("../../components/Admin/AdminUsers/AddUserForm");
const AdminUserTable_1 = require("../../components/Admin/AdminUsers/AdminUserTable");
exports.AdminUsers = () => {
    return (<AdminContent_1.AdminContent>
      <AdminTitle_1.AdminTitle title="Manage users"/>
      <AdminContentCard_1.AdminContentCard>
        <AddUserForm_1.AddUserForm />
      </AdminContentCard_1.AdminContentCard>
      <AdminContentCard_1.AdminContentCard>
        <AdminUserTable_1.AdminUserTable />
      </AdminContentCard_1.AdminContentCard>
    </AdminContent_1.AdminContent>);
};
