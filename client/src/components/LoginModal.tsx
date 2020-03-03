//Speacial thanks to traversi media, https://www.youtube.com/watch?v=mUdo6w87rh4

import React, { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { SyncLoader } from "react-spinners";
import jwt from "jsonwebtoken";

import "../styles/LoginModal.css";
import { useDispatch } from "react-redux";
import { GlobalActionType } from "../Actions";

const classes = {
  h1: "text-xl font-bold m-0",
  p: "text-sm my-4 mb-8 leading-relaxed font-hairline tracking-wider",
  span: "text-xs",
  aclasses: "social text-black text-xs no-underline mx-4",
  button:
    "mt-4 rounded-full border-2 text-white text-sm font-bold px-10 py-2 login-modal-btn",
  form: "bg-white flex flex-col items-center px-8 h-full text-center py-16",
  input: "w-full border-none py-2 px-4 my-2 outline-none border rounded"
};

const styles = {
  button: {
    backgroundColor: "#FF4B2B",
    borderColor: "#FF4B2B"
  }
};
export function LoginModal() {
  const dispatcher = useDispatch();
  const [rightPanelActive, setRightPanelActive] = useState(false);
  let containerClass = classnames(
    "login-modal-container",
    {
      "login-modal-right-panel-active": rightPanelActive
    },
    ""
  );

  const [SIEmail, setSIEmail] = useState("");
  const [SIPassword, setSIPassword] = useState("");
  const [SUName, setSUName] = useState("");
  const [SUEmail, setSUEmail] = useState("");
  const [SUPassword, setSUPassword] = useState("");

  const [loadSI, setLoadSI] = useState(false);
  const [loadSU, setLoadSU] = useState(false);

  const handleSIForm = async (e: any) => {
    e.preventDefault();
    setLoadSI(true);
    const oldToken = (await localStorage.getItem("token")) || "";
    if (oldToken !== "") {
      var decoded = jwt.verify(oldToken, "123");
      console.log(decoded);
      setLoadSI(false);
      dispatcher({type: GlobalActionType.UserLoggedIn})
      return
    }
    const body = {
      email: SIEmail,
      password: SIPassword
    };
    const response = await fetch("users/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(body) // body data type must match "Content-Type" header
    });
    const { token } = await response.json();
    await localStorage.setItem("token", token);
    setLoadSI(false);
    dispatcher({type: GlobalActionType.UserLoggedIn})
  };

  const handleSUForm = async (e: any) => {
    setLoadSU(true);
    e.preventDefault();
    const body = {
      email: SUEmail,
      password: SUPassword,
      name: SUName
    };
    const response = await fetch("users/register", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(body) // body data type must match "Content-Type" header
    });
    console.log(response);
    const res = await response.json(); // parses JSON response into native JavaScript objects
    console.log(res);
    setLoadSU(false);
  };
  return (
    <div className={containerClass} id="login-modal-container">
      <div className="login-modal-form-container login-modal-sign-up-container">
        <form className={classes.form} action="#">
          <h1 className={classes.h1}>Create Account</h1>
          <div className="login-modal-social-container">
            <a href="#" className={classes.aclasses}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className={classes.aclasses}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className={classes.aclasses}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <span className={classes.span}>
            or use your email for registration
          </span>
          <input
            className={classes.input}
            type="text"
            placeholder="Name"
            value={SUName}
            onChange={e => setSUName(e.target.value)}
          />
          <input
            className={classes.input}
            type="email"
            placeholder="Email"
            value={SUEmail}
            onChange={e => setSUEmail(e.target.value)}
          />
          <input
            className={classes.input}
            type="password"
            placeholder="Password"
            value={SUPassword}
            onChange={e => setSUPassword(e.target.value)}
          />
          {loadSU ? (
            <div className="mt-4">
              <SyncLoader size={20} />
            </div>
          ) : (
            <button
              className={classes.button}
              style={styles.button}
              onClick={e => handleSUForm(e)}
            >
              Sign Up
            </button>
          )}
        </form>
      </div>
      <div className="login-modal-form-container login-modal-sign-in-container">
        <form className={classes.form} action="#" style={{ zIndex: 999 }}>
          <h1 className={classes.h1}>Sign in</h1>
          <div className="login-modal-social-container">
            <a href="#" className={classes.aclasses}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className={classes.aclasses}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className={classes.aclasses}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <span className={classes.span}>or use your account</span>
          <input
            className={classes.input}
            type="email"
            placeholder="Email"
            value={SIEmail}
            onChange={e => setSIEmail(e.target.value)}
          />
          <input
            className={classes.input}
            type="password"
            placeholder="Password"
            value={SIPassword}
            onChange={e => setSIPassword(e.target.value)}
          />
          <a href="#" className={classes.aclasses}>
            Forgot your password?
          </a>
          {loadSI ? (
            <div className="mt-4">
              <SyncLoader size={20} color="blue" />
            </div>
          ) : (
            <button
              className={classes.button}
              style={styles.button}
              onClick={e => handleSIForm(e)}
            >
              Sign In
            </button>
          )}
        </form>
      </div>
      <div className="login-modal-overlay-container">
        <div className="login-modal-overlay">
          <div className="login-modal-overlay-panel login-modal-overlay-left">
            <h1 className={classes.h1}>Welcome Back!</h1>
            <p className={classes.p}>
              To keep connected with us please login with your personal info
            </p>
            <button
              className={classnames("login-modal-ghost", classes.button)}
              id="signIn"
              onClick={() => setRightPanelActive(false)}
            >
              Sign In
            </button>
          </div>
          <div className="login-modal-overlay-panel login-modal-overlay-right">
            <h1 className={classes.h1}>Hello, Friend!</h1>
            <p className={classes.p}>
              Enter your personal details and start journey with us
            </p>
            <button
              className={classnames("login-modal-ghost", classes.button)}
              id="signUp"
              onClick={() => setRightPanelActive(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
