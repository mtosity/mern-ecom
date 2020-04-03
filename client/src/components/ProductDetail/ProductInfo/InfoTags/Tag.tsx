import React from 'react';

interface props {
    title: string;
}

export const Tag = ({title}: props) => {
    return (
        <div className="py-2 px-4 border-2 border-red-600 text-red-800 mx-4 my-2 cursor-pointer bg-blue-100 hover:bg-white">
            {title}
        </div>
    )
}
