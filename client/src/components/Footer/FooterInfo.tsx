import React from "react";
import { FooterIcon } from "./FooterIcon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface props {
  title: string;
  icon: IconProp;
}

export const FooterInfo = ({ title, icon }: props) => {
  return (
    <div className="flex items-center mt-4 sm:flex-col sm:justify-center sm:items-start ">
      <FooterIcon icon={icon} />
      <p className="pl-4 sm:p-0 sm:mt-1">{title}</p>
    </div>
  );
};
