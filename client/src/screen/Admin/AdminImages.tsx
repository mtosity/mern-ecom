import React from "react";
import { AdminContent } from "../../components/Admin/AdminContent";
import { AdminContentCard } from "../../components/Admin/Content/AdminContentCard";
import { AddImages } from "../../components/Admin/AdminImages/AddImages";
import { AdminTitle } from "../../components/Admin/Content/AdminTitle";
import { AdminAddProductImage } from "../../components/Admin/AdminImages/AdminAddProductImage";
import { AdminSubImgTable } from "../../components/Admin/AdminImages/AminSubImgTable";

export const AdminImages = () => {
  return (
    <AdminContent>
      <AdminTitle title="Images" />
      <AdminContentCard>
        <AdminTitle title="Upload image and create image url"/>
        <AddImages />
      </AdminContentCard>
      <AdminContentCard>
        <AdminTitle title="Add sub images for product"/>
        <AdminAddProductImage/>
      </AdminContentCard>
      <AdminContentCard>
        <AdminSubImgTable/>
      </AdminContentCard>
    </AdminContent>
  );
};
