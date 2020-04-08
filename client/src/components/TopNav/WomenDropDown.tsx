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
              return <DropDownLink title={m.name} key={m.id}/>
            })
          }
        </div>
        <div className="h-full overflow-hidden object-cover ">
          <img
            src="https://prod.kooding.com/productDetailImage/207792-2/cefb78284fdbac4fee6524fd4720e9a05f9e5371.jpg"
            alt=""
            style={{ maxWidth: "200px", maxHeight: "100%" }}
          />
        </div>
      </div>
    </NavDropDown>
  );
};
