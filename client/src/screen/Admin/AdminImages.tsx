import React from "react";
import { AdminContent } from "../../components/Admin/AdminContent";
import { AdminContentCard } from "../../components/Admin/Content/AdminContentCard";
import { AddImages } from "../../components/Admin/Content/AddImages";
import { AdminTitle } from "../../components/Admin/Content/AdminTitle";

export const AdminImages = () => {
  return (
    <AdminContent>
      <AdminTitle title="Upload image and create image url" />
      <AdminContentCard>
        <AddImages />
      </AdminContentCard>
    </AdminContent>
  );
};
