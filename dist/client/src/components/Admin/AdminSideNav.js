"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const AdminSideNavLink_1 = require("./SideNav/AdminSideNavLink");
const nav = [
    {
        icon: free_solid_svg_icons_1.faHome,
        iconColor: 'white',
        title: 'Dashboard',
        to: '/admin/dashboard',
    },
    {
        icon: free_solid_svg_icons_1.faTh,
        iconColor: '#5B7F41',
        title: 'Category',
        to: '/admin/categories',
    },
    {
        icon: free_solid_svg_icons_1.faCubes,
        iconColor: '#A0802A',
        title: 'Products',
        to: '/admin/products',
    },
    {
        icon: free_solid_svg_icons_1.faUserFriends,
        iconColor: '#BA3632',
        title: 'Users',
        to: '/admin/users',
    },
    {
        icon: free_solid_svg_icons_1.faPeopleCarry,
        iconColor: '#368D8D',
        title: 'Orders',
        to: '/admin/orders',
    },
    {
        icon: free_solid_svg_icons_1.faImage,
        iconColor: '#2799E9',
        title: 'Images',
        to: '/admin/images',
    }
];
exports.AdminSideNav = () => {
    return (<div className="flex-col items-center justify-center w-full">
      {nav.map(n => {
        return <AdminSideNavLink_1.AdminSideNavLink icon={n.icon} iconColor={n.iconColor} title={n.title} to={n.to} key={n.title}/>;
    })}
    </div>);
};
