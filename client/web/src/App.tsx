import React from "react";
import { Provider } from "react-redux";

import "./css/tailwind.css";
import "./index.css";

import Home from "./screen/Home"

const App = () => {
  return (
    <div className="w-full">
      <Home />
    </div>
  );
};

export default App;
