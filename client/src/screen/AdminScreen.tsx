import React from 'react'
import { NavTop } from '../components/Admin/NavTop'
import { Colors } from '../utils/AdminColor'
import { SideNav } from '../components/Admin/SideNav'
import { Content } from '../components/Admin/Content'

export const AdminScreen = () => {
    return (
        <div className="h-screen w-screen bg-admin-body">
            <NavTop/>
            <div className="w-full flex">
                <div style={{flex: 1}} className="p-8">
                    <SideNav/>
                </div>
                <div style={{flex:4}} className="">
                    <Content/>
                </div>
            </div>
        </div>
    )
}
