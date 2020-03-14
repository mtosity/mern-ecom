import React from "react";
import classnames from 'classnames'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCubes, faUserFriends, faPeopleCarry, faTh, faImage } from "@fortawesome/free-solid-svg-icons";
import { AdminSideNavLink } from "./SideNav/AdminSideNavLink";

const nav = [
  {
    icon: faHome,
    iconColor: 'white',
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
  },
  {
    icon: faImage,
    iconColor: '#2799E9',
    title: 'Images',
    to: '/admin/images',
  }
]

export const AdminSideNav = () => {
  return (
    <div className="flex-col items-center justify-center w-full">
      {
        nav.map(n => {
          return <AdminSideNavLink icon={n.icon} iconColor={n.iconColor} title={n.title} to={n.to} key={n.title}/>
        })
      }
    </div>
  );
};
