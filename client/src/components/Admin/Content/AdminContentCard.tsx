import React from 'react'
interface props {
  children: React.ReactNode
}

export const AdminContentCard = ({children}: props) => {
    return (
        <div className="text-blue-100 w-full mb-8 p-2 bg-admin-card rounded shadow-lg px-8 py-4">
            {children}
        </div>
    )
}
