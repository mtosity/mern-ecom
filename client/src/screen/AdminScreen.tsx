import React from 'react'
import { NavTop } from '../components/Admin/NavTop'
import { SideNav } from '../components/Admin/SideNav'
import { Switch, Route } from 'react-router-dom'
import { AdminProducts } from './Admin/AdminProducts'
import { FOF } from './FOF'
import { AdminCategories } from './Admin/AdminCategories'

export const AdminScreen = () => {
    return (
        <div className="w-screen h-screen bg-admin-body overflow-auto h-auto">
            <NavTop/>
            <div className="w-full flex relative">
                <div className="p-4" style={{width: '280px'}}>
                    <SideNav/>
                </div>
                <div className="">
                    <Switch>
                        <Route path="/admin/products" exact component={AdminProducts}/>
                        <Route path="/admin/categories" exact component={AdminCategories}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
