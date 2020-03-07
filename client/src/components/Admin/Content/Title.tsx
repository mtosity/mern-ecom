import React from 'react'

interface props {
    title: string,
    color?: string
}

export const Title = ({title, color}: props) => {
    return (
        <div>
            <h1 className="text-admin-title pb-8 pl-8 font-hairline tracking-wider" style={{color: color}}>{title}</h1>
        </div>
    )
}
