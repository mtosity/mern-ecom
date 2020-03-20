"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
require("./index.css");
const Nav_1 = require("./components/Nav");
const Home_1 = require("./screen/Home");
const Store_1 = __importDefault(require("./Store"));
const AppDownload_1 = require("./screen/AppDownload");
const FOF_1 = require("./screen/FOF");
const AdminScreen_1 = require("./screen/AdminScreen");
require("./styles/font.css");
require("./styles/image-hover.css");
const HomeSwitch = () => (<>
    <Nav_1.Nav></Nav_1.Nav>
    <react_router_dom_1.Switch>
      <react_router_dom_1.Route path="/" exact component={Home_1.Home}/>
      <react_router_dom_1.Route path="/appdownload" exact component={AppDownload_1.AppDownload}/>
      <react_router_dom_1.Route path="/" component={FOF_1.FOF}/>
    </react_router_dom_1.Switch>
  </>);
const App = () => {
    return (<react_redux_1.Provider store={Store_1.default}>
      <div className="w-screen main-container" style={{ backgroundColor: "#FFFFF2" }}>
        <react_router_dom_1.BrowserRouter basename="/React">
          <react_router_dom_1.Switch>
            <react_router_dom_1.Route path="/admin" component={AdminScreen_1.AdminScreen}/>
            <react_router_dom_1.Route path="/" component={HomeSwitch}/>
          </react_router_dom_1.Switch>
        </react_router_dom_1.BrowserRouter>
      </div>
    </react_redux_1.Provider>);
};
exports.default = App;
