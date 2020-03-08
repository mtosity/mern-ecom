import React, { useEffect, useState } from "react";
import { AdminTable } from "../Content/AdminTable";
import { AdminButton } from "../Content/AdminButton";
import Swal from 'sweetalert2';


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
    Swal.fire({
      title: `<p class="text-admin-title">Are you sure?</p>`,
      html: `<p class="text-admin-title">You gonna delete row id ${row.id}!</p>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#BA3632',
      cancelButtonColor: '#2799E9',
      confirmButtonText: 'Yes, delete it!',
      background: '#1E2A31',
    }).then(async (result) => {
      if (result.value) {
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
          Swal.fire({
            title: '<p class="text-admin-title">DELETED</p>',
            html: `<p class="text-admin-title">${status}</p>`,
            background: '#1E2A31',
            confirmButtonColor: '#2799E9'
          })
          getTableData();
        } else {
          const { errors } = await res.json();
          Swal.fire({
            title: '<p class="text-admin-title">ERROR</p>',
            html: `<p class="text-admin-title">${errors[0].message}</p>`,
            background: '#1E2A31',
            confirmButtonColor: '#2799E9'
          })
        }
      }
    })
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
