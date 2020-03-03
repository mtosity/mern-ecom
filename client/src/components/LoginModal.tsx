//Speacial thanks to traversi media, https://www.youtube.com/watch?v=mUdo6w87rh4

import React, { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

import "../styles/LoginModal.css";
const classes = {
  h1: "text-xl font-bold m-0",
  p: "text-sm my-4 mb-8 leading-relaxed font-hairline tracking-wider",
  span: "text-xs",
  aclasses: "social text-black text-xs no-underline mx-4",
  button: "mt-4 rounded-full border-2 text-white text-sm font-bold px-10 py-2 login-modal-btn",
  form: "bg-white flex flex-col justify-center items-center px-8 h-full text-center",
  input: "w-full border-none py-2 px-4 my-2 outline-none border rounded",

};
const styles = {
  button: {
    backgroundColor: "#FF4B2B",
    borderColor: "#FF4B2B"
  }
};
export default function LoginModal() {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  let containerClass = classnames("login-modal-container", {
    "login-modal-right-panel-active": rightPanelActive
  }, "");
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
          <input className={classes.input} type="text" placeholder="Name" />
          <input className={classes.input} type="email" placeholder="Email" />
          <input className={classes.input} type="password" placeholder="Password" />
          <button className={classes.button} style={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
      <div className="login-modal-form-container login-modal-sign-in-container">
        <form className={classes.form} action="#">
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
          <input className={classes.input} type="email" placeholder="Email" />
          <input className={classes.input} type="password" placeholder="Password" />
          <a href="#" className={classes.aclasses}>
            Forgot your password?
          </a>
          <button
            className={classes.button}
            style={styles.button}
            onClick={() => setRightPanelActive(false)}
          >
            Sign In
          </button>
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
