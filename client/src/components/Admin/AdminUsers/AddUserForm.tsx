import React, { useState } from "react";
import { AdminInputTitle } from "../Content/AdminInputTitle";
import { AdminInput } from "../Content/AdminInput";
import { AdminTitle } from "../Content/AdminTitle";
import { AdminButton } from "../Content/AdminButton";
import Swal from "sweetalert2";

export const AddUserForm = () => {
  const roles = ["admin", "user"];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [address, setAddress] = useState("");

  const addUser = async () => {
    const body = {
      email,
      password,
      role,
      name,
      avatar,
      address
    };
    const res = await fetch("/api/user", {
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
      <AdminTitle title="Add new user" />
      <AdminInputTitle title="Email" />
      <AdminInput
        name="email"
        type="text"
        placeholder="email@email.com"
        value={email}
        onChange={setEmail}
      />
      <AdminInputTitle title="Password" />
      <AdminInput
        name="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={setPassword}
      />
      <AdminInputTitle title="Role" />
      <select
        onChange={e => {
          setRole(e.target.value);
        }}
        value={role}
        className="bg-admin-card w-1/4 outline-none p-2 border border-admin-word focus:border-admin-input"
      >
        {roles.map(c => {
          return (
            <option value={c} key={c}>
              {c}
            </option>
          );
        })}
      </select>
      <AdminInputTitle title="Full name" classname="mt-4" />
      <AdminInput
        name="name"
        type="text"
        placeholder="Tony"
        value={name}
        onChange={setName}
      />
      <AdminInputTitle title="Avatar url (if not create one in image side bar)" />
      <AdminInput
        name="avatar"
        type="text"
        placeholder="imgur"
        value={avatar}
        onChange={setAvatar}
      />
      <AdminInputTitle title="Address" classname="mt-4" />
      <AdminInput
        name="address"
        type="text"
        placeholder="viet nam"
        value={address}
        onChange={setAddress}
      />
      <div className="mt-4">
        <AdminButton title="Add user" onClick={addUser} />
      </div>
    </>
  );
};
