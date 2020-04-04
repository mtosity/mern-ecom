import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
import { CategoriesActionType, GlobalActionType } from "./Actions";
import { CheckOut } from "./screen/CheckOut";

const HomeSwitch = () => {
  const dispatcher = useDispatch();
  useEffect(() => {
    fetch("/api/category").then((res) => {
      res.json().then((cates) => {
        dispatcher({ type: CategoriesActionType.AddCategory, payload: cates });
        dispatcher({ type: GlobalActionType.DoneLoading });
      });
    });
  }, []);
  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" component={ProductCategories} />
        <Route path="/checkout" component={CheckOut} />
        <Route path="/detail/:id" exact component={ProductDetail} />
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
            <Route path="/admin" component={AdminScreen} />
            <Route path="/" component={HomeSwitch} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
