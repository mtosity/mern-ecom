import React from "react";
import { AdminFuncTable } from "../Content/AdminFuncTable";

export const AdminSubImgTable = () => {
  const columns = [
    {
      name: "Product ID",
      selector: "productID",
      sortable: true,
      allowOverflow: true,
    },
    {
      name: "Image URL",
      selector: "image",
      sortable: true,
      allowOverflow: true,
    }
  ];
  return (
    <AdminFuncTable columns={columns} tableName="subimg" tableTitle="Category"/>
  )
}
