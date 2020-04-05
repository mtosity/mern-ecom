import React from "react";
import { AdminTitle } from "../../components/Admin/Content/AdminTitle";
import { AdminContentCard } from "../../components/Admin/Content/AdminContentCard";
import { AdminContent } from "../../components/Admin/AdminContent";
import { AddProductForm } from "../../components/Admin/AdminProducts/AddProductForm";
import { AdminSyncTableButton } from "../../components/Admin/Content/AdminSyncTableButton";
import { AdmiAddCategoryForm } from "../../components/Admin/AdminCategories/AdminAddCategoryForm";
import { AdminTable } from "../../components/Admin/Content/AdminTable";
import { AdminCategoryTable } from "../../components/Admin/AdminCategories/AdminCategoryTable";
import { AdminHaftContentCard } from "../../components/Admin/Content/AdminHaftContentCard";
import { AdminInputTitle } from "../../components/Admin/Content/AdminInputTitle";

export const AdminDashboard = () => {
  return (
    <AdminContent>
      <div className="w-full flex justify-between">
        <AdminHaftContentCard>
          <AdminInputTitle title="WEBSITE VIEW" />
          <p className="text-blue-600 text-3xl font-bold my-8">52.78M+</p>
        </AdminHaftContentCard>
        <AdminHaftContentCard>
          <AdminInputTitle title="WEBSITE IMPRESSION" />
          <p className="text-yellow-600 text-3xl font-bold my-8">$454,342+</p>
        </AdminHaftContentCard>
        <AdminHaftContentCard>
          <AdminInputTitle title="WEBSITE IMPRESSION" />
          <p className="text-purple-600 text-3xl font-bold my-8">$454,342+</p>
        </AdminHaftContentCard>
      </div>
      <AdminContentCard>
        <img src="https://i.imgur.com/aStFDPW.png" alt="" />
      </AdminContentCard>
    </AdminContent>
  );
};
