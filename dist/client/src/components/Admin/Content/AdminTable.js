"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_data_table_component_1 = __importStar(require("react-data-table-component"));
react_data_table_component_1.createTheme("dark", {
    text: {
        primary: "#DDF3FE",
        secondary: "#7C98AB"
    },
    background: {
        default: "#2B3C46"
    },
    context: {
        background: "#cb4b16",
        text: "#FFFFFF"
    },
    divider: {
        default: "#073642"
    },
    button: {
        default: "#2aa198",
        hover: "rgba(0,0,0,.08)",
        focus: "rgba(255,255,255,.12)",
        disabled: "rgba(0,0,0,.12)"
    },
    sortFocus: {
        default: "#2aa198"
    }
});
const ExpanableComponent = ({ data }) => <p className="ml-32 text-sm text-admin-input">ID: {data.id}</p>;
exports.AdminTable = ({ columns, data, title, onSelectedRowsChange, }) => {
    return (<react_data_table_component_1.default title={title} columns={columns} data={data} theme="dark" selectableRows onSelectedRowsChange={state => onSelectedRowsChange(state)} expandableRows expandableRowsComponent={<ExpanableComponent />} noContextMenu/>);
};
