"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AdminTitle_1 = require("../../components/Admin/Content/AdminTitle");
const AdminContentCard_1 = require("../../components/Admin/Content/AdminContentCard");
const AdminContent_1 = require("../../components/Admin/AdminContent");
const AdminSyncTableButton_1 = require("../../components/Admin/Content/AdminSyncTableButton");
const AdminAddCategoryForm_1 = require("../../components/Admin/AdminCategories/AdminAddCategoryForm");
const AdminCategoryTable_1 = require("../../components/Admin/AdminCategories/AdminCategoryTable");
exports.AdminCategories = () => {
    return (<AdminContent_1.AdminContent>
      <AdminTitle_1.AdminTitle title="Category Admin"/>
      <AdminContentCard_1.AdminContentCard>
        <AdminTitle_1.AdminTitle title="Add new category"/>
        <AdminAddCategoryForm_1.AdmiAddCategoryForm />
      </AdminContentCard_1.AdminContentCard>
      <AdminContentCard_1.AdminContentCard>
        <AdminCategoryTable_1.AdminCategoryTable />
      </AdminContentCard_1.AdminContentCard>
      <AdminContentCard_1.AdminContentCard>
        <AdminTitle_1.AdminTitle title="Configure database" color="red"/>
        <AdminSyncTableButton_1.AdminSyncTableButton tableName="category"/>
      </AdminContentCard_1.AdminContentCard>
    </AdminContent_1.AdminContent>);
};
