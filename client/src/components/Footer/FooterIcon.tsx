import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface props {
    icon: IconProp
}
export const FooterIcon = ({icon}: props) => {
  return (
    <div className="rounded-full w-8 h-8 bg-red-600 flex items-center justify-center">
      <FontAwesomeIcon icon={icon} color="white" />
    </div>
  );
};
