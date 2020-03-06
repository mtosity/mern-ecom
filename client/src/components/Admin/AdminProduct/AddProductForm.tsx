import React from "react";
import { AdminClasses } from "../Classes";
import classnames from "classnames";
import { InputTitle } from "../Content/InputTitle";
import { AdminInput } from "../Content/AdminInput";
import {InputRange} from '../Content/InputRange';


export const AddProductForm = () => {
  return (
    <div className="w-full">
      <InputTitle title="Product title" />
      <AdminInput
        type="text"
        placeholder="Some clothes"
        name="title"
      />
      <InputTitle title="Product description" />
      <AdminInput
        type="text"
        placeholder="This hat is awesome"
        name="description"
      />
      <InputTitle title="Product quantity" />
      <InputRange/>
    </div>
  );
};
