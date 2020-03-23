import React from 'react'

interface props {
    title: string;
}

export const ProductSectionTitle = ({title}: props) => {
    return (
        <div className="my-4">
            <p className="jo-font font-bold text-lg">{title}</p>
            <div className=" border-b border-red-400 w-8"></div>
        </div>
    )
}
