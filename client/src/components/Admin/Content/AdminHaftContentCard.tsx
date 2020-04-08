import React from 'react'
interface props {
  children: React.ReactNode
}

export const AdminHaftContentCard = ({children}: props) => {
    return (
        <div className="text-blue-100 w-1/2 mb-8 p-2 bg-admin-card rounded shadow-lg px-8 py-4 mx-2">
            {children}
        </div>
    )
}
