"use strict";
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
const free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const react_spinners_1 = require("react-spinners");
const Actions_1 = require("../../Actions");
const react_redux_1 = require("react-redux");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.LoginForm = ({ classes, styles }) => {
    const dispatcher = react_redux_1.useDispatch();
    let isMounted = true;
    react_1.useEffect(() => {
        return () => {
            isMounted = false;
        };
    }, []);
    const [SIEmail, setSIEmail] = react_1.useState("");
    const [SIPassword, setSIPassword] = react_1.useState("");
    const [SIError, setSIError] = react_1.useState({
        isError: false,
        path: "",
        message: ""
    });
    const [loadSI, setLoadSI] = react_1.useState(false);
    const handleSIForm = async (e) => {
        e.preventDefault();
        setLoadSI(true);
        const oldToken = await localStorage.getItem("token");
        if (!isMounted) {
            // var decoded = jwt.verify(oldToken, "123");
            // console.log(decoded);
            // setLoadSI(false);
            // dispatcher({ type: GlobalActionType.UserLoggedIn });
        }
        else {
            const body = {
                email: SIEmail,
                password: SIPassword
            };
            const response = await fetch("user/login", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(body) // body data type must match "Content-Type" header
            });
            // const user = await response.json();
            // console.log(user);
            console.log(response);
            if (response.status === 200) {
                const user = await response.json();
                const { email, roleID, name, avatar, address } = user;
                dispatcher({
                    type: Actions_1.AccountActionType.AddAccount,
                    payload: { email, roleID, name, avatar, address }
                });
                localStorage.setItem("auth-token", jsonwebtoken_1.default.sign(user, "123"));
                setLoadSI(false);
                dispatcher({ type: Actions_1.GlobalActionType.UserLoggedIn });
            }
            else {
                const res_error = await response.json();
                setSIError({
                    isError: true,
                    path: res_error.errors[0].path,
                    message: res_error.errors[0].message
                });
                setLoadSI(false);
            }
        }
    };
    const { isError, path, message } = SIError;
    const emailInputClasses = classnames_1.default(classes.input, {
        "border border-red-600": path === "email" && isError
    });
    const passwordInputClasses = classnames_1.default(classes.input, {
        "border border-red-600": path === "password" && isError
    });
    return (<form className={classes.form} action="#" style={{ zIndex: 999 }}>
      <h1 className={classes.h1}>Login</h1>
      <div className="login-modal-social-container">
        <a href="#" className={classes.aclasses}>
          <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faFacebookF}/>
        </a>
        <a href="#" className={classes.aclasses}>
          <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faFacebookF}/>
        </a>
        <a href="#" className={classes.aclasses}>
          <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faFacebookF}/>
        </a>
      </div>
      <span className={classes.span}>or use your account</span>
      <input className={emailInputClasses} type="email" placeholder="Email" value={SIEmail} onChange={e => setSIEmail(e.target.value)}/>
      <input className={passwordInputClasses} type="password" placeholder="Password" value={SIPassword} onChange={e => setSIPassword(e.target.value)}/>
      <a href="#" className={classes.aclasses}>
        Forgot your password?
      </a>
      {loadSI ? (<div className="mt-4 text-blue-400">
          <react_spinners_1.SyncLoader size={20} color={"#54C6EB"}/>
        </div>) : (<button className={classes.button} style={styles.button} onClick={e => handleSIForm(e)}>
          Login
        </button>)}
      <p className="text-red-500 text-md mt-2">{message}</p>
    </form>);
};
