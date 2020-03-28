import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {  NavLink } from "react-router-dom";


interface props {
  title: string;
  active: boolean;
  onClick: any;
}

export const CategoryLink = ({ title, active, onClick }: props) => {
  return (
    <NavLink
      to={`/category/${title}`}
      className="uppercase p-4 border bg-white border-gray-400 hover:text-red-600 flex justify-between"
      activeClassName="text-red-600"
      style={{ minWidth: "300px" }}
      onClick={onClick}
    >
      {title}
      {
          active ? 
          <FontAwesomeIcon icon={faArrowRight}/>
          :
          <></>
      }
    </NavLink>
  );
};
