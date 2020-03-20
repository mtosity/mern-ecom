"use strict";
//Speacial thanks to traversi media, https://www.youtube.com/watch?v=mUdo6w87rh4
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const LoginForm_1 = require("./LoginModal/LoginForm");
const SignUpForm_1 = require("./LoginModal/SignUpForm");
const OverlayPanel_1 = require("./LoginModal/OverlayPanel");
require("../styles/LoginModal.css");
const classes = {
    h1: "text-xl font-bold m-0",
    p: "text-sm my-4 mb-8 leading-relaxed font-hairline tracking-wider",
    span: "text-xs",
    aclasses: "social text-black text-xs no-underline mx-4",
    button: "mt-4 rounded-full border-2 text-white text-sm font-bold px-10 py-2 login-modal-btn",
    form: "bg-white flex flex-col items-center px-8 h-full text-center py-16 border-none",
    input: "w-full py-2 px-4 my-2 outline-none rounded"
};
const styles = {
    button: {
        backgroundColor: "#54C6EB",
        borderColor: "#54C6EB"
    }
};
function LoginModal() {
    const [rightPanelActive, setRightPanelActive] = react_1.useState(false);
    let containerClass = classnames_1.default("login-modal-container", {
        "login-modal-right-panel-active": rightPanelActive
    }, "");
    return (<div className={containerClass} id="login-modal-container">
      <div className="login-modal-form-container login-modal-sign-up-container">
        <SignUpForm_1.SignUpForm classes={classes} styles={styles}/>
      </div>
      <div className="login-modal-form-container login-modal-sign-in-container">
        <LoginForm_1.LoginForm classes={classes} styles={styles}/>
      </div>
      <div className="login-modal-overlay-container">
        <OverlayPanel_1.OverlayPanel classes={classes} setRightPanelActive={setRightPanelActive}/>
      </div>
    </div>);
}
exports.LoginModal = LoginModal;
