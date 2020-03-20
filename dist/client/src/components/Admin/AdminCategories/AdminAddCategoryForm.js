"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const AdminInputTitle_1 = require("../Content/AdminInputTitle");
const AdminInput_1 = require("../Content/AdminInput");
const AdminButton_1 = require("../Content/AdminButton");
const sweetalert2_1 = __importDefault(require("sweetalert2"));
exports.AdmiAddCategoryForm = () => {
    const [name, setName] = react_1.useState("");
    const addCate = async () => {
        const body = { name: name };
        const res = await fetch("/api/category", {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if (res.status === 200) {
            const { msg } = await res.json();
            sweetalert2_1.default.fire({
                title: `<p class="text-admin-title">${msg}</p>`,
                icon: 'success',
                showCancelButton: true,
                background: '#1E2A31',
            });
        }
        else {
            const { errors } = await res.json();
            sweetalert2_1.default.fire({
                title: `<p class="text-admin-title">${errors[0].message}</p>`,
                icon: 'error',
                background: '#1E2A31',
            });
        }
    };
    return (<>
      <AdminInputTitle_1.AdminInputTitle title="Category name"/>
      <div>
        <AdminInput_1.AdminInput type="text" placeholder="name" name="name" value={name} onChange={setName}/>
      </div>
      <div className="flex items-center">
        <AdminButton_1.AdminButton title="Add" onClick={() => addCate()}/>
      </div>
    </>);
};
