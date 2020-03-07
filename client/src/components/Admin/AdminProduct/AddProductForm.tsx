import React, { useState } from "react";
import classnames from "classnames";
import { InputTitle } from "../Content/InputTitle";
import { AdminInput } from "../Content/AdminInput";
import {InputRange} from '../Content/InputRange';


export const AddProductForm = () => {
  const [title, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [originPrice, setOriginPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  return (
    <>
      <InputTitle title="Title" />
      <AdminInput
        type="text"
        placeholder="Some clothes"
        name="title"
        value={title}
        onChange={setName}
      />
      <InputTitle title="Description" />
      <AdminInput
        type="text"
        placeholder="This hat is awesome"
        name="description"
        textarea
        value={description}
        onChange={setDescription}
      />
      <InputTitle title="Quantity" />
      <InputRange min={0} max={60} step={1}/>
      <InputTitle title="Original price" />
      <AdminInput
        type="number"
        placeholder="Some clothes"
        name="originPrice"
        value={originPrice}
        onChange={setOriginPrice}
      />
      <InputTitle title="Sale price" />
      <AdminInput
        type="number"
        placeholder="Some clothes"
        name="salePrice"
        value={salePrice}
        onChange={setSalePrice}
      />
    </>
  );
};
