import React, { useState } from "react";
import { InputTitle } from "../Content/InputTitle";
import { AdminInput } from "../Content/AdminInput";
import { AdminButton } from "../Content/AdminButton";
import Swal from 'sweetalert2';

export const AddCategoryForm = () => {
  const [name, setName] = useState("");
  const addCate = async () => {
    const body = { name: name };
    const res = await fetch("/api/category", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    if (res.status === 200) {
      const { msg } = await res.json();
      Swal.fire({
        title: `<p class="text-admin-title">${msg}</p>`,
        icon: 'success',
        showCancelButton: true,
        background: '#1E2A31',
      })
    } else {
      const { errors } = await res.json();
      Swal.fire({
        title: `<p class="text-admin-title">${errors[0].message}</p>`,
        icon: 'error',
        background: '#1E2A31',
      })
    }
  };
  return (
    <>
      <InputTitle title="Category name" />
      <div>
        <AdminInput
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={setName}
        />
      </div>
      <div className="flex items-center">
        <AdminButton title="Add" onClick={() => addCate()} />
      </div>
    </>
  );
};
