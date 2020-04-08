import React from "react";
import { AdminFuncTable } from "../Content/AdminFuncTable";

export const AdminOrdersTable = () => {
  const columns = [
    {
      name: "Name",
      selector: "productName",
      sortable: true,
      allowOverflow: true,
      wrap: true,
    },
    {
      name: "User ID",
      selector: "userID",
      sortable: true,
      allowOverflow: true,
      wrap: true,
    },
    {
      name: "Order date",
      selector: "createdAt",
      sortable: true,
      allowOverflow: true,
      wrap: true,
    },
    {
      name: "Cost",
      selector: "price",
      sortable: true,
      wrap: true,
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
      wrap: true,
    },
  ];
  return (
    <AdminFuncTable
      columns={columns}
      tableName="order"
      tableTitle="Orders table"
    />
  );
};
