import React from 'react'

interface props {
    title: string;
}

export const CategoryGenderTitle = ({title}: props) => {
    return (
        <div style={{minWidth: "300px"}} className="p-4 bg-red-600 text-white font-bold jo-font">
            {title}
        </div>
    )
}
