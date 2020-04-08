import React, { useState } from "react";
import { AdminInputTitle } from "../Content/AdminInputTitle";
import { AdminInput } from "../Content/AdminInput";
import { AdminButton } from "../Content/AdminButton";
import Swal from "sweetalert2";

export const AdmiAddCategoryForm = () => {
  const genders = ["female", "male", "both"];
  const [name, setName] = useState("");
  const [gender, setGender] = useState(genders[0]);
  const addCate = async () => {
    const body = { name: name, gender: gender };
    console.log(body);
    const res = await fetch("/api/category", {
      method: "POST",
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
        icon: "success",
        showCancelButton: true,
        background: "#1E2A31"
      });
    } else {
      const { errors } = await res.json();
      Swal.fire({
        title: `<p class="text-admin-title">${errors[0].message}</p>`,
        icon: "error",
        background: "#1E2A31"
      });
    }
  };
  return (
    <>
      <AdminInputTitle title="Category name" />
      <AdminInput
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={setName}
      />
      <AdminInputTitle title="Gender for this category" />
      <select
        onChange={e => {
          setGender(e.target.value);
        }}
        value={gender}
        className="bg-admin-card w-1/4 outline-none p-2 border border-admin-word focus:border-admin-input"
      >
        {genders.map(c => {
          return (
            <option value={c} key={c}>
              {c}
            </option>
          );
        })}
      </select>
      <div className="flex items-center mt-4">
        <AdminButton title="Add" onClick={() => addCate()} />
      </div>
    </>
  );
};
