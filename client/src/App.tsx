import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import Nav from "./components/Nav";

import Home from "./screen/Home";

import Store from "./Store";
import { AppDownload } from "./screen/AppDownload";
import { FOF } from "./screen/FOF";

const App = () => {
  return (
    <Provider store={Store}>
      <div className="w-full">
        <BrowserRouter>
          <div className="w-full z-10">
            <Nav></Nav>
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/appdownload" exact component={AppDownload} />
            <Route path="/" component={FOF} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
