"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const AdminButton_1 = require("./AdminButton");
exports.AdminSyncTableButton = ({ tableName }) => {
    const [msg, setMsg] = react_1.useState("");
    const syncTable = async () => {
        const res = await fetch(`/api/${tableName}/sync`);
        const { msg } = await res.json();
        setMsg(msg);
    };
    const btnTitle = "Sync " + tableName + " table";
    return (<div>
      <AdminButton_1.AdminButton title={btnTitle} onClick={() => syncTable()}/>
      <p className="text-green-400 mt-2">{msg}</p>
    </div>);
};
