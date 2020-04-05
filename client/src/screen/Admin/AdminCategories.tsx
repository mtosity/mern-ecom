import React from "react";
import { AdminTitle } from "../../components/Admin/Content/AdminTitle";
import { AdminContentCard } from "../../components/Admin/Content/AdminContentCard";
import { AdminContent } from "../../components/Admin/AdminContent";
import { AdminSyncTableButton } from "../../components/Admin/Content/AdminSyncTableButton";
import { AdmiAddCategoryForm } from "../../components/Admin/AdminCategories/AdminAddCategoryForm";
import { AdminCategoryTable } from "../../components/Admin/AdminCategories/AdminCategoryTable";

export const AdminCategories = () => {
  return (
    <AdminContent>
      <AdminTitle title="Category Admin" />
      <AdminContentCard>
        <AdminTitle title="Add new category" />
        <AdmiAddCategoryForm/>
      </AdminContentCard>
      <AdminContentCard>
        <AdminCategoryTable/>
      </AdminContentCard>
      <AdminContentCard>
        <AdminTitle title="Configure database" color="red" />
        <AdminSyncTableButton tableName="category"/>
      </AdminContentCard>
    </AdminContent>
  );
};
