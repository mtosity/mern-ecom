import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { InputTitle } from "../Content/InputTitle";
import { AdminInput } from "../Content/AdminInput";
import { InputRange } from "../Content/InputRange";
import { CategoryType } from "../../../DataType";
import { AdminButton } from "../Content/AdminButton";

export const AddProductForm = () => {
  const [title, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState([5]);
  const [originPrice, setOriginPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [cate, setCate] = useState("");
  const [cates, setCates] = useState([]);
  const [loadCate, setLoadCate] = useState(true);
  useEffect(() => {
    fetch("/api/category").then(res => {
      res.json().then(data => {
        setCates(data.categories);
        setLoadCate(false);
      });
    });
  }, []);
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
      <InputTitle title="Select product category" />
      {loadCate ? (
        <div>Loading categories</div>
      ) : (
        <select
          onChange={e => {
            setCate(e.target.value);
          }}
          className="bg-admin-card w-40 outline-none p-2 border border-admin-word focus:border-admin-input"
        >
          {cates.map((c: CategoryType) => {
            return (
              <option value={c.name} key={c.id}>
                {c.name}
              </option>
            );
          })}
        </select>
      )}
      <InputTitle title="Description" classname="mt-4" />
      <AdminInput
        type="text"
        placeholder="This hat is awesome"
        name="description"
        textarea
        value={description}
        onChange={setDescription}
      />
      <InputTitle title="Quantity" />
      <InputRange
        min={0}
        max={60}
        step={1}
        values={quantity}
        onChange={setQuantity}
      />
      <InputTitle title="Original price" />
      <AdminInput
        type="number"
        placeholder="0"
        name="originPrice"
        value={originPrice}
        onChange={setOriginPrice}
      />
      <InputTitle title="Sale price" />
      <AdminInput
        type="number"
        placeholder="0"
        name="salePrice"
        value={salePrice}
        onChange={setSalePrice}
      />
      <InputTitle title="Image url" />
      <AdminInput
        type="text"
        placeholder="imgur"
        name="salePrice"
        value={imgUrl}
        onChange={setImgUrl}
      />
      <div className="mt-4">
        <AdminButton title="Add product" onClick={() => {}} />
      </div>
    </>
  );
};
