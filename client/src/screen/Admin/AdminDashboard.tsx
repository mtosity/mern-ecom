import React from "react";
import { AdminContentCard } from "../../components/Admin/Content/AdminContentCard";
import { AdminContent } from "../../components/Admin/AdminContent";
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
