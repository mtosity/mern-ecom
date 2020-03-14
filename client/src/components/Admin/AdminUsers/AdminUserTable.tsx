import React from "react";
import { AdminFuncTable } from "../Content/AdminFuncTable";

export const AdminUserTable = () => {
  const columns = [
    {
      name: "Email",
      selector: "email",
      sortable: true,
      allowOverflow: true,
    },
    {
      name: "Role",
      selector: "role",
      sortable: true,
      allowOverflow: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
      allowOverflow: true,
    },
    {
      name: "Address",
      selector: "address",
      sortable: true,
      allowOverflow: true,
    },
    {
      name: "Avatar URL",
      selector: "avatar",
      sortable: true,
      allowOverflow: true,
    },
  ];
  return (
    <AdminFuncTable columns={columns} tableName="user" tableTitle="User"/>
  )
}
