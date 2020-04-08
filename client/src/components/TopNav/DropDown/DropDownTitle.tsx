import React from 'react'

interface props {
    title: string;
}

export const DropDownTitle = ({title}: props) => {
    return (
        <>
          <span className=" uppercase font-bold w-40">{title}</span>
          <div className="w-8 border-b border-gray-400 mt-2"></div>   
        </>
    )
}
