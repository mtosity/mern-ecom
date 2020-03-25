import React from "react";
import { AdminFuncTable } from "../Content/AdminFuncTable";

export const AdminUserTable = () => {
  const columns = [
    {
      name: "Email",
      selector: "email",
      sortable: true,
      wrap: true,
    },
    {
      name: "Role",
      selector: "role",
      sortable: true,
      wrap: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
      wrap: true,
    },
    {
      name: "Address",
      selector: "address",
      sortable: true,
      wrap: true,
    },
    {
      name: "Avatar URL",
      selector: "avatar",
      sortable: true,
      wrap: true,
    },
  ];
  return (
    <AdminFuncTable columns={columns} tableName="user" tableTitle="User"/>
  )
}
