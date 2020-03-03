import React from "react";
import { Provider } from "react-redux";

import "./css/tailwind.css";
import "./index.css";

import Home from "./screen/Home"
import Login from "./screen/Login"

const App = () => {
  return (
    <div className="w-full">
      <Login />
    </div>
  );
};

export default App;
