import React from "react";
import { NavDropDown } from "./DropDown/NavDropDown";
import { DropDownTitle } from "./DropDown/DropDownTitle";
import { DropDownLink } from "./DropDown/DropDownLink";


export const CatalogDropDown = () => {
  return (
    <NavDropDown>
      <div className="flex">
        <div className="pr-16">
          <DropDownTitle title="MEN" />
          <DropDownLink title="Clothing" />
          <DropDownLink title="Clothing" />
          <DropDownLink title="Clothing" />
          <DropDownLink title="Clothing" />
        </div>
        <div className="pr-16">
          <DropDownTitle title="MEN" />
          <DropDownLink title="Clothing" />
          <DropDownLink title="Clothing" />
          <DropDownLink title="Clothing" />
          <DropDownLink title="Clothing" />
        </div>
        <div className="pr-16">
          <DropDownTitle title="MEN" />
          <DropDownLink title="Clothing" />
          <DropDownLink title="Clothing" />
          <DropDownLink title="Clothing" />
          <DropDownLink title="Clothing" />
        </div>
        <div className="h-full pt-4" style={{width: '300px'}}>
          <img src="https://preview.uideck.com/items/shopr-theme/assets/img/block_menu.jpg" alt=""/>
        </div>
      </div>
    </NavDropDown>
  );
};
