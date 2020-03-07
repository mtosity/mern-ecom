import React from "react";
import classnames from 'classnames'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCubes, faUserFriends, faPeopleCarry, faTh } from "@fortawesome/free-solid-svg-icons";
import { SideNavLink } from "./SideNav/SideNavLink";

const nav = [
  {
    icon: faHome,
    iconColor: '#2799E9',
    title: 'Dashboard',
    to: '/admin/dashboard',
  },
  {
    icon: faTh,
    iconColor: '#5B7F41',
    title: 'Category',
    to: '/admin/categories',
  },
  {
    icon: faCubes,
    iconColor: '#A0802A',
    title: 'Products',
    to: '/admin/products',
  },
  {
    icon: faUserFriends,
    iconColor: '#BA3632',
    title: 'Users',
    to: '/admin/users',
  },
  {
    icon: faPeopleCarry,
    iconColor: '#368D8D',
    title: 'Orders',
    to: '/admin/orders',
  }
]

export const SideNav = () => {
  return (
    <div className="flex-col items-center justify-center w-full">
      {
        nav.map(n => {
          return <SideNavLink icon={n.icon} iconColor={n.iconColor} title={n.title} to={n.to}/>
        })
      }
    </div>
  );
};
