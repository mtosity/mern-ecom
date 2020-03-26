import React from "react";
import { AdminFuncTable } from "../Content/AdminFuncTable";

export const AdminProductTable = () => {
  const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true,
      wrap: true
    },
    {
      name: "Quantity",
      selector: "quantity",
      sortable: true
    },
    {
      name: "Original price",
      selector: "originPrice",
      sortable: true
    },
    {
      name: "Sale price",
      selector: "salePrice",
      sortable: true
    },
    {
      name: "Gender",
      selector: "gender",
      sortable: true
    },
    {
      name: "Category ID",
      selector: "categoryID",
      sortable: true,
      wrap: true
    }
  ];
  return (
    <AdminFuncTable
      columns={columns}
      tableName="product"
      tableTitle="Product"
    />
  );
};
