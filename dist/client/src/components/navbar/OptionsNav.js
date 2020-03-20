"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Actions_1 = require("../../Actions");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const react_modal_1 = __importDefault(require("react-modal"));
const LoginModal_1 = require("../LoginModal");
react_modal_1.default.setAppElement("#root");
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%) scale(0.5)",
        padding: "0",
        overflow: "hidden",
        boxShadow: "5px 10px",
        border: "none",
        borderRadius: "20px"
    },
    overlay: {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,.6)",
        zIndex: 20
    }
};
function OptionsNav() {
    const dispatcher = react_redux_1.useDispatch();
    const OpenLoginModal = react_redux_1.useSelector(state => state.GlobalReducer.OpenLoginModal);
    const authenticated = react_redux_1.useSelector(state => state.GlobalReducer.authenticated);
    const UserName = react_redux_1.useSelector(state => state.AccountReducer.name);
    // const UserName = useSelector<AccountStateInterface, string>(
    //   state => state.name
    // )
    function openModal() { }
    function afterOpenModal() {
        customStyles.content = {
            ...customStyles.content,
            transform: "translate(-50%, -50%) scale(1)",
            transition: "transform 300ms ease-out"
        };
    }
    function closeModal() {
        dispatcher({ type: Actions_1.GlobalActionType.SetOpenLoginModalFalse });
        customStyles.content = {
            ...customStyles.content,
            transform: "translate(-50%, -50%) scale(0.5)",
            transition: "transform 0"
        };
    }
    return (<div className="grid grid-cols-12 text-center md:grid-cols-7 text-sm text-blue-400 font-bold shadow	" style={{ background: "linear-gradient( #00387d,#2C3748)" }}>
      <react_router_dom_1.Link to="/appdownload" className="btn-nav col-span-3">
        SAVE MORE ON APP
      </react_router_dom_1.Link>
      <a href="" className="btn-nav col-span-2">
        SELL ON LAZADA
      </a>
      <a href="" className="btn-nav col-span-2">
        CUSTOMER CARE
      </a>
      <a href="" className="btn-nav col-span-2 md:col-span-3">
        TRACK MY ORDER
      </a>
      {authenticated ? (<a className="btn-nav col-span-3 md:col-span-4 hover:cursor-pointer">{UserName}</a>) : (<a className="btn-nav col-span-3 md:col-span-4 hover:cursor-pointer" onClick={() => dispatcher({ type: Actions_1.GlobalActionType.SetOpenLoginModalTrue })}>
          LOGIN / SIGN UP
        </a>)}
      
      <react_modal_1.default isOpen={OpenLoginModal} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <LoginModal_1.LoginModal />
      </react_modal_1.default>
    </div>);
}
exports.OptionsNav = OptionsNav;
