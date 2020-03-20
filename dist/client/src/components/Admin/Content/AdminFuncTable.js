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
const AdminTable_1 = require("../Content/AdminTable");
const AdminButton_1 = require("../Content/AdminButton");
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const AdminInputTitle_1 = require("./AdminInputTitle");
exports.AdminFuncTable = ({ tableName, tableTitle, columns }) => {
    const [data, setData] = react_1.useState([]);
    const [loading, setLoading] = react_1.useState(true);
    const [selectedState, setSelectedState] = react_1.useState({
        allSelected: false,
        selectedCount: 0,
        selectedRows: []
    });
    const getTableData = () => {
        fetch(`/api/${tableName}`).then(res => {
            res.json().then(data => {
                setData(data);
                setLoading(false);
            });
        });
    };
    const deleteTableRows = async () => {
        if (selectedState.allSelected) {
            sweetalert2_1.default.fire({
                title: `<p class="text-admin-title">Are you sure?</p>`,
                html: `<p class="text-admin-title">You gonna delete all rows</p>`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#BA3632",
                cancelButtonColor: "#2799E9",
                confirmButtonText: "Yes, delete it!",
                background: "#1E2A31"
            }).then(async (result) => {
                if (result.value) {
                    const res = await fetch(`/api/${tableName}/truncate`, {
                        method: "DELETE",
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    if (res.status === 200) {
                        const { msg } = await res.json();
                        sweetalert2_1.default.fire({
                            title: '<p class="text-admin-title">DELETED</p>',
                            html: `<p class="text-admin-title">${msg}</p>`,
                            background: "#1E2A31",
                            confirmButtonColor: "#2799E9"
                        });
                        getTableData();
                    }
                    else {
                        const { errors } = await res.json();
                        sweetalert2_1.default.fire({
                            title: '<p class="text-admin-title">ERROR</p>',
                            html: `<p class="text-admin-title">${errors[0].message}</p>`,
                            background: "#1E2A31",
                            confirmButtonColor: "#2799E9"
                        });
                    }
                }
            });
        }
        else if (selectedState.selectedCount === 0) {
            sweetalert2_1.default.fire({
                title: `<p class="text-admin-title">Zero row selected</p>`,
                icon: "warning",
                background: "#1E2A31"
            });
        }
        else {
            sweetalert2_1.default.fire({
                title: `<p class="text-admin-title">Are you sure?</p>`,
                html: `<p class="text-admin-title">You gonna delete ${selectedState.selectedCount} rows!</p>`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#BA3632",
                cancelButtonColor: "#2799E9",
                confirmButtonText: "Yes, delete it!",
                background: "#1E2A31"
            }).then(async (result) => {
                if (result.value) {
                    const id = selectedState.selectedRows.map((row) => {
                        return row.id;
                    });
                    const body = { id: id };
                    const res = await fetch(`/api/${tableName}`, {
                        method: "DELETE",
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(body)
                    });
                    if (res.status === 200) {
                        const { msg } = await res.json();
                        sweetalert2_1.default.fire({
                            title: '<p class="text-admin-title">DELETED</p>',
                            html: `<p class="text-admin-title">${msg}</p>`,
                            background: "#1E2A31",
                            confirmButtonColor: "#2799E9"
                        });
                        getTableData();
                    }
                    else {
                        const { errors } = await res.json();
                        sweetalert2_1.default.fire({
                            title: '<p class="text-admin-title">ERROR</p>',
                            html: `<p class="text-admin-title">${errors[0].message}</p>`,
                            background: "#1E2A31",
                            confirmButtonColor: "#2799E9"
                        });
                    }
                }
            });
        }
    };
    react_1.useEffect(() => {
        getTableData();
    }, []);
    return loading ? (<div>loading table...</div>) : (<div>
      <AdminTable_1.AdminTable title={tableTitle} data={data} columns={columns} onSelectedRowsChange={setSelectedState}/>
      <AdminInputTitle_1.AdminInputTitle title="Shift + scroll to left right scroll"/>
      <div className="flex items-center mt-4">
        <AdminButton_1.AdminButton title="Delete selected rows" onClick={deleteTableRows}/>
        <AdminButton_1.AdminButton title="Reload" onClick={getTableData} classname="ml-4"/>
      </div>
    </div>);
};
