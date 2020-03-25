import React, { useState } from "react";
import { AdminInputTitle } from "../Content/AdminInputTitle";
import { AdminInput } from "../Content/AdminInput";
import { AdminButton } from "../Content/AdminButton";
import Swal from "sweetalert2";

export const AdminAddProductImage = () => {
  const [proID, setProID] = useState("");
  const [img, setImg] = useState("");

  const addImg = async () => {
    const body = { productID: proID, image: img };
    const res = await fetch("/api/subimg", {
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
    <div>
      <AdminInputTitle title="Product ID" />
      <AdminInput
        type="text"
        placeholder="uuid"
        name="proID"
        value={proID}
        onChange={setProID}
      />
      <AdminInputTitle title="Image URL" />
      <AdminInput
        type="text"
        placeholder="url"
        name="img"
        value={img}
        onChange={setImg}
      />
      <div>
        <AdminButton title="ADD IMAGE" onClick={addImg} />
      </div>
    </div>
  );
};
