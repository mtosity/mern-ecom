import React, { useState } from "react";
import { InputTitle } from "../Content/InputTitle";
import { AdminInput } from "../Content/AdminInput";
import { AdminButton } from "../Content/AdminButton";

export const AddCategoryForm = () => {
  const [name, setName] = useState("");
  const addCate = async () => {
    const body = { name: name };
    const response = await fetch('/api/category/add', {
      method: "POST",
      mode: "cors", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body) 
    });
    const res_json = response.json();
    console.log(res_json);
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
      <AdminButton title="Add" onClick={() => addCate()} />
    </>
  );
};
