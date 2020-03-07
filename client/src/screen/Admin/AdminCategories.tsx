import React from "react";
import { Title } from "../../components/Admin/Content/Title";
import { ContentCard } from "../../components/Admin/Content/ContentCard";
import { Content } from "../../components/Admin/Content";
import { AddProductForm } from "../../components/Admin/AdminProduct/AddProductForm";
import { AdminSyncTableButton } from "../../components/Admin/Content/AdminSyncTableButton";

export const AdminCategories = () => {
  return (
    <Content>
      <Title title="Products Admin" />
      <ContentCard>
        <Title title="Add product form" />
        <AddProductForm/>
      </ContentCard>
      <ContentCard>
        <Title title="Configure database" color="red" />
        <AdminSyncTableButton tableName="category"/>
      </ContentCard>
    </Content>
  );
};
