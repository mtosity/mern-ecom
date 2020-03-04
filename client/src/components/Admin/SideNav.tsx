import React from "react";
import classnames from 'classnames'
import { Colors } from "../../utils/AdminColor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { SideNavLink } from "./SideNav/SideNavLink";

export const SideNav = () => {
  return (
    <div className="flex-col items-center justify-center w-full">
        <SideNavLink icon={faHome} iconColor={Colors.icon1} focus/>
        <SideNavLink icon={faHome} iconColor={Colors.icon1} />
        <SideNavLink icon={faHome} iconColor={Colors.icon1} />
    </div>
  );
};
