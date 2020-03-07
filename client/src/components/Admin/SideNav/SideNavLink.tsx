import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classnames from "classnames";
import { Link, RouteComponentProps, NavLink } from "react-router-dom";

interface props {
  icon: IconProp;
  iconColor: string;
  title: string;
  to: string;
}

export const SideNavLink: React.FC<props> = ({
  icon,
  iconColor,
  title,
  to
}: props) => {

  return (
    <NavLink
      to={to}
      activeStyle={{ color: iconColor }}
      activeClassName="bg-admin-topnav"
      className="flex items-center w-full p-4 group faCubes rounded text-admin-word"
    >
      <FontAwesomeIcon icon={icon} color={iconColor} />
      <p className="ml-4 font-hairline text-sm group-hover:text-admin-title">
        {title}
      </p>
    </NavLink>
  );
};
