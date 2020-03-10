import React from "react";
import { AdminFuncTable } from "../Content/AdminFuncTable";

export const ProductTable = () => {
  const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true
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
    
  ];
  return (
    <AdminFuncTable columns={columns} tableName="product" tableTitle="Category"/>
  )
}
