import React from 'react'
import { NavTop } from '../components/Admin/NavTop'
import { Colors } from '../utils/AdminColor'
import { SideNav } from '../components/Admin/SideNav'
import { Content } from '../components/Admin/Content'
import { Title } from '../components/Admin/Content/Title'
import { TableView } from '../components/Admin/Content/Table'
import { ContentCard } from '../components/Admin/Content/ContentCard'

export const AdminScreen = () => {
    return (
        <div className="w-screen h-screen bg-admin-body overflow-auto h-auto">
            <NavTop/>
            <div className="w-full flex relative">
                <div className="p-4" style={{width: '280px'}}>
                    <SideNav/>
                </div>
                <div className="">
                    <Content>
                        <Title title="DATA TABLES"/>
                        <ContentCard>
                            <TableView/>
                        </ContentCard>
                    </Content>
                </div>
            </div>
        </div>
    )
}
