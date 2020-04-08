import React, { useState, useEffect } from "react";
import { AdminInputTitle } from "../Content/AdminInputTitle";
import { AdminInput } from "../Content/AdminInput";
import { AdminInputRange } from "../Content/AdminInputRange";
import { CategoryType } from "../../../DataType";
import { AdminButton } from "../Content/AdminButton";
import Swal from "sweetalert2";

export const AddProductForm = () => {
  const genders = ["female", "male", "both"];

  const [title, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState([5]);
  const [originPrice, setOriginPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [cate, setCate] = useState("");
  const [cates, setCates] = useState<Array<CategoryType>>([]);
  const [loadCate, setLoadCate] = useState(true);
  const [gender, setGender] = useState(genders[0]);
  useEffect(() => {
    fetch("/api/category").then(res => {
      res.json().then(categories => {
        if (categories.length > 0) {
          setCates(categories);
          setLoadCate(false);
          setCate(categories[0].id);
        }
      });
    });
  }, []);

  const addProduct = async () => {
    const body = {
      title: title,
      description: description,
      quantity: quantity[0],
      image: imgUrl,
      originPrice: originPrice,
      salePrice: salePrice,
      categoryID: cate,
      gender: gender
    };
    const res = await fetch("/api/product", {
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
      <AdminInputTitle title="Title" />
      <AdminInput
        type="text"
        placeholder="Some clothes"
        name="title"
        value={title}
        onChange={setName}
      />
      <div className="w-1/2 flex">
        <div className="flex-1">
          <AdminInputTitle title="Select product category" />
          {loadCate ? (
            <div>Loading categories</div>
          ) : (
            <select
              onChange={e => {
                setCate(e.target.value);
              }}
              value={cate}
              className="bg-admin-card w-3/4 outline-none p-2 border border-admin-word focus:border-admin-input"
            >
              {cates.map((c: CategoryType) => {
                return (
                  <option value={c.id} key={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          )}
        </div>
        <div className="flex-1">
          <AdminInputTitle title="Gender for this product" />
          <select
            onChange={e => {
              setGender(e.target.value);
            }}
            value={gender}
            className="bg-admin-card w-3/4 outline-none p-2 border border-admin-word focus:border-admin-input"
          >
            {genders.map(c => {
              return (
                <option value={c} key={c}>
                  {c}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <AdminInputTitle title="Description" classname="mt-4" />
      <AdminInput
        type="text"
        placeholder="This hat is awesome"
        name="description"
        textarea
        value={description}
        onChange={setDescription}
      />
      <AdminInputTitle title="Quantity" />
      <AdminInputRange
        min={0}
        max={60}
        step={1}
        values={quantity}
        onChange={setQuantity}
      />
      <AdminInputTitle title="Original price" />
      <AdminInput
        type="number"
        placeholder="0"
        name="originPrice"
        value={originPrice}
        onChange={setOriginPrice}
      />
      <AdminInputTitle title="Sale price" />
      <AdminInput
        type="number"
        placeholder="0"
        name="salePrice"
        value={salePrice}
        onChange={setSalePrice}
      />
      <AdminInputTitle title="Image url" />
      <AdminInput
        type="text"
        placeholder="imgur"
        name="salePrice"
        value={imgUrl}
        onChange={setImgUrl}
      />
      <div className="mt-4">
        <AdminButton title="Add product" onClick={addProduct} />
      </div>
    </>
  );
};
