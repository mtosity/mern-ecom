import React, { useState } from "react";
import { Content } from "../../components/Admin/Content";
import { ContentCard } from "../../components/Admin/Content/ContentCard";
import { Title } from "../../components/Admin/Content/Title";
import { AddUserForm } from "../../components/Admin/AdminUsers/AddUserForm";
import { UserTable } from "../../components/Admin/AdminUsers/UserTable";

export const AdminUsers = () => {
  return (
    <Content>
      <Title title="Manage users" />
      <ContentCard>
        <AddUserForm />
      </ContentCard>
      <ContentCard>
        <UserTable />
      </ContentCard>
    </Content>
  );
};
