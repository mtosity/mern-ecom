import React from "react";
import { Provider } from "react-redux";

import "./index.css";

import Home from "./screen/Home"

import Store from "./Store";

const App = () => {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
};

export default App;
