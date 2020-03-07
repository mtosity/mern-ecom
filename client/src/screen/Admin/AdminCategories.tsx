import React from "react";
import { Title } from "../../components/Admin/Content/Title";
import { ContentCard } from "../../components/Admin/Content/ContentCard";
import { Content } from "../../components/Admin/Content";
import { AddProductForm } from "../../components/Admin/AdminProduct/AddProductForm";
import { AdminSyncTableButton } from "../../components/Admin/Content/AdminSyncTableButton";
import { AddCategoryForm } from "../../components/Admin/AdminCategory/AddCategoryForm";
import { AdminTable } from "../../components/Admin/Content/AdminTable";
import { CategoryTable } from "../../components/Admin/AdminCategory/CategoryTable";

export const AdminCategories = () => {
  return (
    <Content>
      <Title title="Category Admin" />
      <ContentCard>
        <Title title="Add new category" />
        <AddCategoryForm/>
      </ContentCard>
      <ContentCard>
        <CategoryTable/>
      </ContentCard>
      <ContentCard>
        <Title title="Configure database" color="red" />
        <AdminSyncTableButton tableName="category"/>
      </ContentCard>
    </Content>
  );
};
