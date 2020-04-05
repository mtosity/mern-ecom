import React from "react";
import { AdminContent } from "../../components/Admin/AdminContent";
import { AdminContentCard } from "../../components/Admin/Content/AdminContentCard";
import { AdminTitle } from "../../components/Admin/Content/AdminTitle";
import { AdminOrdersTable } from "../../components/Admin/AdminOrders/AdminOrdersTables";
import { AdminOrdersDelivered } from "../../components/Admin/AdminOrders/AdminOrdersDelivered";

export const AdminOrders = () => {
  return (
    <AdminContent>
      <AdminTitle title="Orders" />
      <AdminContentCard>
        <AdminOrdersTable />
      </AdminContentCard>
      <AdminContentCard>
        <AdminOrdersDelivered />
      </AdminContentCard>
    </AdminContent>
  );
};
