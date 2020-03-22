import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import { Nav } from "./components/Nav";

import { Home } from "./screen/Home";

import Store from "./Store";
import { AppDownload } from "./screen/AppDownload";
import { FOF } from "./screen/FOF";
import { AdminScreen } from "./screen/AdminScreen";
import "./styles/font.css";
import "./styles/image-hover.css";
const HomeSwitch = () => (
  <>
    <Nav></Nav>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/" component={FOF} />
    </Switch>
  </>
);

const App = () => {
  return (
    <Provider store={Store}>
      <div
        className="w-screen main-container"
        style={{ backgroundColor: "#FFFFF2" }}
      >
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
