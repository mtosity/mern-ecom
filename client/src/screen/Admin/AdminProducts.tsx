import React from "react";
import { AdminTitle } from "../../components/Admin/Content/AdminTitle";
import { AdminContentCard } from "../../components/Admin/Content/AdminContentCard";
import { AdminContent } from "../../components/Admin/AdminContent";
import { AddProductForm } from "../../components/Admin/AdminProducts/AddProductForm";
import { AdminProductTable } from "../../components/Admin/AdminProducts/AdminProductTable";
import { AdminSyncTableButton } from "../../components/Admin/Content/AdminSyncTableButton";

export const AdminProducts = () => {
  return (
    <AdminContent>
      <AdminTitle title="Products Admin" />
      <AdminContentCard>
        <AdminTitle title="Add product form" />
        <AddProductForm/>
      </AdminContentCard>
      <AdminContentCard>
        <AdminProductTable/>
      </AdminContentCard>
      <AdminContentCard>
        <AdminTitle title="Configure database" color="red" />
        <AdminSyncTableButton tableName="category"/>
      </AdminContentCard>
    </AdminContent>
  );
};
