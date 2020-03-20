"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AdminContent_1 = require("../../components/Admin/AdminContent");
const AdminContentCard_1 = require("../../components/Admin/Content/AdminContentCard");
const AddImages_1 = require("../../components/Admin/Content/AddImages");
const AdminTitle_1 = require("../../components/Admin/Content/AdminTitle");
exports.AdminImages = () => {
    return (<AdminContent_1.AdminContent>
      <AdminTitle_1.AdminTitle title="Upload image and create image url"/>
      <AdminContentCard_1.AdminContentCard>
        <AddImages_1.AddImages />
      </AdminContentCard_1.AdminContentCard>
    </AdminContent_1.AdminContent>);
};
