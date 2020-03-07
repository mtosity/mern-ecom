import React from "react";
import DataTable, { createTheme, IDataTableColumn } from "react-data-table-component";

createTheme("dark", {
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

const data = [{ id: 1, title: "Conan the Barbarian", year: "1982" }];
const columns = [
  {
    name: "Title",
    selector: "title",
    sortable: true
  },
  {
    name: "Year",
    selector: "year",
    sortable: true,
    right: true
  }
];

interface props {
  columns: IDataTableColumn<Object>[];
  data: Array<Object>;
  title: string;
}

export const AdminTable = ({columns, data, title}: props) => {
  return (
    <DataTable
      title={title}
      columns={columns}
      data={data}
      theme="dark"
    />
  );
};
