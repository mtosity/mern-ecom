import React, { useEffect, useState } from "react";
import { AdminTable } from "../Content/AdminTable";

export const CategoryTable = () => {
  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true
    },
    {
      name: "Name",
      selector: "name",
      sortable: true
    },
    {
      name: "Created At",
      selector: "createdAt",
      sortable: true
    },
    {
      name: "Updated At",
      selector: "updatedAt",
      sortable: true
    }
  ];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/category/all").then(res => {
      res.json().then(data => {
        const { categories } = data;
        setData(categories);
        setLoading(false);
      });
    });
  }, []);
  return loading ? <div>loading</div> : <AdminTable title="Categories" data={data} columns={columns}/>;
};
