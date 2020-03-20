"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AdminNavTop_1 = require("../components/Admin/AdminNavTop");
const AdminSideNav_1 = require("../components/Admin/AdminSideNav");
const react_router_dom_1 = require("react-router-dom");
const AdminProducts_1 = require("./Admin/AdminProducts");
const AdminCategories_1 = require("./Admin/AdminCategories");
const AdminImages_1 = require("./Admin/AdminImages");
const AdminUsers_1 = require("./Admin/AdminUsers");
exports.AdminScreen = () => {
    return (<div className="w-screen h-screen bg-admin-body overflow-auto h-auto">
            <AdminNavTop_1.AdminNavTop />
            <div className="w-full flex relative">
                <div className="p-4" style={{ width: '280px' }}>
                    <AdminSideNav_1.AdminSideNav />
                </div>
                <div className="">
                    <react_router_dom_1.Switch>
                        <react_router_dom_1.Route path="/admin/products" exact component={AdminProducts_1.AdminProducts}/>
                        <react_router_dom_1.Route path="/admin/categories" exact component={AdminCategories_1.AdminCategories}/>
                        <react_router_dom_1.Route path="/admin/images" exact component={AdminImages_1.AdminImages}/>
                        <react_router_dom_1.Route path="/admin/users" exact component={AdminUsers_1.AdminUsers}/>
                    </react_router_dom_1.Switch>
                </div>
            </div>
        </div>);
};
