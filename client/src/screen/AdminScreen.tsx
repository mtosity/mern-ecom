import React, { useEffect } from "react";
import { AdminNavTop } from "../components/Admin/AdminNavTop";
import { AdminSideNav } from "../components/Admin/AdminSideNav";
import { Switch, Route, useHistory } from "react-router-dom";
import { AdminProducts } from "./Admin/AdminProducts";
import { AdminCategories } from "./Admin/AdminCategories";
import { AdminImages } from "./Admin/AdminImages";
import { AdminUsers } from "./Admin/AdminUsers";
import { AdminOrders } from "./Admin/AdminOrders";
import { AdminDashboard } from "./Admin/AdminDashboard";
import { useSelector } from "react-redux";
import { ApplicationState } from "../Reducers/CombinedReducers";

export const AdminScreen = () => {
  const history = useHistory();
  const authenticated = useSelector<ApplicationState, boolean>(
    (state) => state.GlobalReducer.authenticated
  );
  const role = useSelector<ApplicationState, string>(
    (state) => state.AccountReducer.role
  );
  useEffect(() => {
    if (authenticated && role === "admin") {
      history.push("/admin/dashboard");
    } else {
      history.push("/admin/login");
    }
  }, [role, authenticated, history]);
  return (
    <div className="w-screen h-screen bg-admin-body overflow-auto h-auto">
      <AdminNavTop />
      <div className="w-full flex relative">
        <div className="p-4" style={{ width: "280px" }}>
          <AdminSideNav />
        </div>
        <div className="">
          <Switch>
            <Route path="/admin/dashboard" exact component={AdminDashboard} />
            <Route path="/admin/products" exact component={AdminProducts} />
            <Route path="/admin/categories" exact component={AdminCategories} />
            <Route path="/admin/images" exact component={AdminImages} />
            <Route path="/admin/users" exact component={AdminUsers} />
            <Route path="/admin/orders" exact component={AdminOrders} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
