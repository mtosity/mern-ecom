import React from "react";
import { NavDropDown } from "./DropDown/NavDropDown";
import { DropDownTitle } from "./DropDown/DropDownTitle";
import { DropDownLink } from "./DropDown/DropDownLink";

export const BlogDropDown = () => {
  return (
    <NavDropDown >
      <div className="flex">
        <div className="pr-16">
          <DropDownTitle title="minhtamos blogs" />
          <DropDownLink title="Clothing" />
          <DropDownLink title="Clothing" />
          <DropDownLink title="Clothing" />
          <DropDownLink title="Clothing" />
        </div>
      </div>
    </NavDropDown>
  );
};
