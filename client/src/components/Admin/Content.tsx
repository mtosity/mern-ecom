import React from 'react'

import { useTable } from 'react-table'

  interface props {
    children: React.ReactNode
  }

export const Content = ({children}: props) => {
    return (
        <div className=" bg-transparent absolute w-30 h-30" style={{top: '-120px', left: '280px', bottom: '0px', right: '40px'}}>
            {children}
        </div>
    )
}
