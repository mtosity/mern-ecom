import React from "react";
import { NavDropDown } from "./DropDown/NavDropDown";
import { DropDownTitle } from "./DropDown/DropDownTitle";
import { DropDownLink } from "./DropDown/DropDownLink";
import { CategoryType } from "../../DataType";

interface props {
  menu: Array<CategoryType>
}

export const WomenDropDown = ({menu}: props) => {
  return (
    <NavDropDown>
      <div className="flex">
        <div className="flex flex-col pr-8 uppercase">
          <DropDownTitle title="The best for female" />
          {
            menu.map(m => {
              return <DropDownLink title={m.name} />
            })
          }
        </div>
        <div className="h-full overflow-hidden object-cover ">
          <img
            src="https://cdn.shopify.com/s/files/1/0293/9277/products/10-17-19_Studio_2_OD_OM_14-38-28_32__D0124_Olive__25_NT_760x.jpg?v=1571691061"
            alt=""
            style={{ maxWidth: "200px", maxHeight: "100%" }}
          />
        </div>
      </div>
    </NavDropDown>
  );
};
