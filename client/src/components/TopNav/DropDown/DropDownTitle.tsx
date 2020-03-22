import React from 'react'

interface props {
    title: string;
}

export const DropDownTitle = ({title}: props) => {
    return (
        <>
          <p className=" uppercase font-bold">{title}</p>
          <div className="w-4 border-b border-gray-400 mt-2"></div>   
        </>
    )
}
