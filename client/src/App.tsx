import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import Nav from "./components/Nav";

import Home from "./screen/Home";

import Store from "./Store";

const App = () => {
  return (
    <Provider store={Store}>
      <div className="w-full">
        <div className="w-full z-10">
          <Nav></Nav>
        </div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/" component={() => <div>Not Found</div>} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
