import React from "react";
import { AdminFuncTable } from "../Content/AdminFuncTable";

export const AdminCategoryTable = () => {
  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
      allowOverflow: true,
      wrap: true,
    },
    {
      name: "Gender",
      selector: "gender",
      sortable: true,
      allowOverflow: true,
      wrap: true,
    },
    {
      name: "Created At",
      selector: "createdAt",
      sortable: true,
      wrap: true,
    },
    {
      name: "Updated At",
      selector: "updatedAt",
      sortable: true,
      wrap: true,
    }
  ];
  return (
    <AdminFuncTable columns={columns} tableName="category" tableTitle="Category"/>
  )
}
