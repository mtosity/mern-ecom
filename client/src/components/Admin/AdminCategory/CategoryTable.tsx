import React, { useEffect, useState } from "react";
import { AdminTable } from "../Content/AdminTable";
import { AdminButton } from "../Content/AdminButton";

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
  const getTableData = () => {
    fetch("/api/category/all").then(res => {
      res.json().then(data => {
        const { categories } = data;
        setData(categories);
        setLoading(false);
      });
    });
  };
  const deleteTableRow = async (row: any) => {
    const body = { id: row.id };
    const res = await fetch("/api/category", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    if (res.status === 200) {
      const { status } = await res.json();
      console.log(status);
    } else {
      const { errors } = await res.json();
      console.log(errors);
    }
  }
  useEffect(() => {
    getTableData();
  }, []);
  return loading ? (
    <div>loading</div>
  ) : (
    <div>
      <p className="text-admin-word">"Double click the row to delete that row"</p>
      <AdminTable title="Categories" data={data} columns={columns} onRowDoubleClicked={deleteTableRow}/>
      <AdminButton title="Reload" onClick={getTableData} />
    </div>
  );
};
