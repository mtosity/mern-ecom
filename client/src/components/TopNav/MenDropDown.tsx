import React from "react";
import { NavDropDown } from "./DropDown/NavDropDown";
import { DropDownTitle } from "./DropDown/DropDownTitle";
import { DropDownLink } from "./DropDown/DropDownLink";
import { CategoryType } from "../../DataType";

interface props {
  menu: Array<CategoryType>
}

export const MenDropDown = ({menu}: props) => {
  return (
    <NavDropDown>
      <div className="flex">
        <div className="flex flex-col pr-8 uppercase">
          <DropDownTitle title="Fashion for guys" />
          {
            menu.map(m => {
              return <DropDownLink title={m.name} key={m.id}/>
            })
          }
        </div>
        <div className="pt-4">
          <img
            src="https://preview.uideck.com/items/shopr-theme/assets/img/block_menu.jpg"
            alt=""
            style={{ maxWidth: "200px", maxHeight: "100%" }}
          />
        </div>
      </div>
    </NavDropDown>
  );
};
