import React from "react";
import { AdminFuncTable } from "../Content/AdminFuncTable";

export const AdminSubImgTable = () => {
  const columns = [
    {
      name: "Product ID",
      selector: "productID",
      sortable: true,
      wrap: true,
    },
    {
      name: "Image URL",
      selector: "image",
      sortable: true,
      wrap: true,
    }
  ];
  return (
    <AdminFuncTable columns={columns} tableName="subimg" tableTitle="Product images"/>
  )
}
