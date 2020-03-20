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
const AdminTitle_1 = require("../Content/AdminTitle");
const AdminButton_1 = require("../Content/AdminButton");
const sweetalert2_1 = __importDefault(require("sweetalert2"));
exports.AddUserForm = () => {
    const roles = ["admin", "user"];
    const [email, setEmail] = react_1.useState("");
    const [password, setPassword] = react_1.useState("");
    const [role, setRole] = react_1.useState("admin");
    const [name, setName] = react_1.useState("");
    const [avatar, setAvatar] = react_1.useState("");
    const [address, setAddress] = react_1.useState("");
    const addUser = async () => {
        const body = {
            email,
            password,
            role,
            name,
            avatar,
            address
        };
        const res = await fetch("/api/user", {
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
                icon: "success",
                showCancelButton: true,
                background: "#1E2A31"
            });
        }
        else {
            const { errors } = await res.json();
            sweetalert2_1.default.fire({
                title: `<p class="text-admin-title">${errors[0].message}</p>`,
                icon: "error",
                background: "#1E2A31"
            });
        }
    };
    return (<>
      <AdminTitle_1.AdminTitle title="Add new user"/>
      <AdminInputTitle_1.AdminInputTitle title="Email"/>
      <AdminInput_1.AdminInput name="email" type="text" placeholder="email@email.com" value={email} onChange={setEmail}/>
      <AdminInputTitle_1.AdminInputTitle title="Password"/>
      <AdminInput_1.AdminInput name="password" type="password" placeholder="password" value={password} onChange={setPassword}/>
      <AdminInputTitle_1.AdminInputTitle title="Role"/>
      <select onChange={e => {
        setRole(e.target.value);
    }} value={role} className="bg-admin-card w-1/4 outline-none p-2 border border-admin-word focus:border-admin-input">
        {roles.map(c => {
        return (<option value={c} key={c}>
              {c}
            </option>);
    })}
      </select>
      <AdminInputTitle_1.AdminInputTitle title="Full name" classname="mt-4"/>
      <AdminInput_1.AdminInput name="name" type="text" placeholder="Tony" value={name} onChange={setName}/>
      <AdminInputTitle_1.AdminInputTitle title="Avatar url (if not create one in image side bar)"/>
      <AdminInput_1.AdminInput name="avatar" type="text" placeholder="imgur" value={avatar} onChange={setAvatar}/>
      <AdminInputTitle_1.AdminInputTitle title="Address" classname="mt-4"/>
      <AdminInput_1.AdminInput name="address" type="text" placeholder="viet nam" value={address} onChange={setAddress}/>
      <div className="mt-4">
        <AdminButton_1.AdminButton title="Add user" onClick={addUser}/>
      </div>
    </>);
};
