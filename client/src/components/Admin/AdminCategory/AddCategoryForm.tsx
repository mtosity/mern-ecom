import React, { useState } from "react";
import { InputTitle } from "../Content/InputTitle";
import { AdminInput } from "../Content/AdminInput";
import { AdminButton } from "../Content/AdminButton";

export const AddCategoryForm = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("");
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
      const { status } = await res.json();
      setMsg(status);
      setMsgColor("green");
    } else {
      const { errors } = await res.json();
      console.log(errors);
      setMsg(errors[0].message);
      setMsgColor("red");
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
        <p className="ml-4" style={{color: msgColor}}>{msg}</p>
      </div>
    </>
  );
};
