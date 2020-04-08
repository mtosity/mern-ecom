import React from "react";
import { AdminContent } from "../../components/Admin/AdminContent";
import { AdminContentCard } from "../../components/Admin/Content/AdminContentCard";
import { AdminTitle } from "../../components/Admin/Content/AdminTitle";
import { AddUserForm } from "../../components/Admin/AdminUsers/AddUserForm";
import { AdminUserTable } from "../../components/Admin/AdminUsers/AdminUserTable";

export const AdminUsers = () => {
  return (
    <AdminContent>
      <AdminTitle title="Manage users" />
      <AdminContentCard>
        <AddUserForm />
      </AdminContentCard>
      <AdminContentCard>
        <AdminUserTable />
      </AdminContentCard>
    </AdminContent>
  );
};
