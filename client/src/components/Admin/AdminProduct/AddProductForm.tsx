import React from "react";
import classnames from "classnames";
import { InputTitle } from "../Content/InputTitle";
import { AdminInput } from "../Content/AdminInput";
import {InputRange} from '../Content/InputRange';


export const AddProductForm = () => {
  return (
    <div className="w-full">
      <InputTitle title="Title" />
      <AdminInput
        type="text"
        placeholder="Some clothes"
        name="title"
      />
      <InputTitle title="Description" />
      <AdminInput
        type="text"
        placeholder="This hat is awesome"
        name="description"
        textarea
      />
      <InputTitle title="Quantity" />
      <InputRange min={0} max={60} step={1}/>
      <InputTitle title="Original price" />
      <AdminInput
        type="number"
        placeholder="Some clothes"
        name="originPrice"
      />
      <InputTitle title="Sale price" />
      <AdminInput
        type="number"
        placeholder="Some clothes"
        name="salePrice"
      />
    </div>
  );
};
