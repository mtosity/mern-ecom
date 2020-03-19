import React, { useState } from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface props {
  icon: IconDefinition;
}

export const PopupIcon = ({ icon }: props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="p-4 bg-white mx-2 rounded hidden group-hover:block z-10 hover:bg-red-600 hover:text-white cursor-pointer
        "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FontAwesomeIcon icon={icon} color={hover === false ? "gray" : "white"} />
    </div>
  );
};
