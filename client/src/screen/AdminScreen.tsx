import React from 'react'
import { AdminNavTop } from '../components/Admin/AdminNavTop'
import { AdminSideNav } from '../components/Admin/AdminSideNav'
import { Switch, Route } from 'react-router-dom'
import { AdminProducts } from './Admin/AdminProducts'
import { FOF } from './FOF'
import { AdminCategories } from './Admin/AdminCategories'
import { AdminImages } from './Admin/AdminImages'
import { AdminUsers } from './Admin/AdminUsers'

export const AdminScreen = () => {
    return (
        <div className="w-screen h-screen bg-admin-body overflow-auto h-auto">
            <AdminNavTop/>
            <div className="w-full flex relative">
                <div className="p-4" style={{width: '280px'}}>
                    <AdminSideNav/>
                </div>
                <div className="">
                    <Switch>
                        <Route path="/admin/products" exact component={AdminProducts}/>
                        <Route path="/admin/categories" exact component={AdminCategories}/>
                        <Route path="/admin/images" exact component={AdminImages}/>
                        <Route path="/admin/users" exact component={AdminUsers}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
