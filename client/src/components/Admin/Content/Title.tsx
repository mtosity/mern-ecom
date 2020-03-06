import React from 'react'

interface props {
    title: string
}

export const Title = ({title}: props) => {
    return (
        <div>
            <h1 className="text-admin-title pb-8 pl-8 font-hairline tracking-wider">{title}</h1>
        </div>
    )
}
