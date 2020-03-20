"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AdminTitle_1 = require("../../components/Admin/Content/AdminTitle");
const AdminContentCard_1 = require("../../components/Admin/Content/AdminContentCard");
const AdminContent_1 = require("../../components/Admin/AdminContent");
const AddProductForm_1 = require("../../components/Admin/AdminProducts/AddProductForm");
const AdminProductTable_1 = require("../../components/Admin/AdminProducts/AdminProductTable");
const AdminSyncTableButton_1 = require("../../components/Admin/Content/AdminSyncTableButton");
exports.AdminProducts = () => {
    return (<AdminContent_1.AdminContent>
      <AdminTitle_1.AdminTitle title="Products Admin"/>
      <AdminContentCard_1.AdminContentCard>
        <AdminTitle_1.AdminTitle title="Add product form"/>
        <AddProductForm_1.AddProductForm />
      </AdminContentCard_1.AdminContentCard>
      <AdminContentCard_1.AdminContentCard>
        <AdminProductTable_1.AdminProductTable />
      </AdminContentCard_1.AdminContentCard>
      <AdminContentCard_1.AdminContentCard>
        <AdminTitle_1.AdminTitle title="Configure database" color="red"/>
        <AdminSyncTableButton_1.AdminSyncTableButton tableName="category"/>
      </AdminContentCard_1.AdminContentCard>
    </AdminContent_1.AdminContent>);
};
