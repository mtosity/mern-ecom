import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import { Nav } from "./components/Nav";

import { Home } from "./screen/Home";

import Store from "./Store";
import { FOF } from "./screen/FOF";
import { AdminScreen } from "./screen/AdminScreen";
import "./styles/font.css";
import "./styles/image-hover.css";
import "animate.css";
import { ProductDetail } from "./screen/ProductDetail";
import { Footer } from "./components/Footer";
import { ProductCategories } from "./screen/ProductCategories";
import { CategoriesActionType, GlobalActionType, AccountActionType } from "./Actions";
import { CheckOut } from "./screen/CheckOut";
import { Orders } from "./screen/Orders";
import { AdminLogin } from "./screen/Admin/AdminLogin";
import jwt from "jsonwebtoken";
import { UserProfile } from "./screen/UserProfile";

const HomeSwitch = () => {
  const dispatcher = useDispatch();
  useEffect(() => {
    fetch("/api/category").then((res) => {
      res.json().then((cates) => {
        dispatcher({ type: CategoriesActionType.AddCategory, payload: cates });
        dispatcher({ type: GlobalActionType.DoneLoading });
      });
    });
    const token = localStorage.getItem("auth-token");
    if (token) {
      const user: any = jwt.verify(token, process.env.REACT_APP_JWT || "");
      if (user) {
        const body = {
          email: user.email,
          password: user.password,
        };
        fetch("/api/user/load", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *client
          body: JSON.stringify(body), // body data type must match "Content-Type" header
        }).then((res) => {
          if (res.status === 200) {
            res.json().then((user) => {
              dispatcher({
                type: AccountActionType.AddAccount,
                payload: user,
              });
              dispatcher({ type: GlobalActionType.UserLoggedIn });
            });
          }
        });
      }
    }
  }, []);
  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" component={ProductCategories} />
        <Route path="/checkout" component={CheckOut} />
        <Route path="/orders" component={Orders} />
        <Route path="/detail/:id" exact component={ProductDetail} />
        <Route path="/profile" exact component={UserProfile} />
        <Route path="/" component={FOF} />
      </Switch>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Provider store={Store}>
      <div className="w-screen" style={{ backgroundColor: "#FFFFF2" }}>
        <BrowserRouter>
          <Switch>
            <Route path="/admin/login" exact component={AdminLogin} />
            <Route path="/admin" component={AdminScreen} />
            <Route path="/" component={HomeSwitch} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
