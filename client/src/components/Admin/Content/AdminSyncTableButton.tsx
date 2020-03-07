import React from 'react'
import { AdminButton } from './AdminButton'

interface props {
    tableName: string;
}

export const AdminSyncTableButton = ({tableName}: props) => {
    const syncTable = () => {

    }
    const btnTitle = "Sync " + tableName;
    return (
        <AdminButton
            title={btnTitle}
            onClick={() => {

            }}
        />
    )
}
