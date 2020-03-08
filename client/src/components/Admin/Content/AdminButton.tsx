import React from 'react'

interface props {
    title: string;
    onClick: Function;
}

export const AdminButton = ({title, onClick}: props) => {
    return (
        <button 
            className="text-admin-title rounded focus:outline-none py-1 active:bg-blue-400 px-4 bg-admin-card adtive:bg-admin-topnav hover:bg-admin-card border-admin-word border hover:border-admin-input"
            onClick={(e) => onClick(e)}
        >
            {title}
        </button>
    )
}
