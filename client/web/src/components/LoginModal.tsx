import React, { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";


import "../css/LoginModal.css";
const classes = {
  h1Classes: "font-bold m-0",
  pClasses: "text-xs mt-4"
};
export default function LoginModal() {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  let containerClass = classnames("container", {
    "right-panel-active": rightPanelActive
  });
  return (
    <div className={containerClass} id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1 className={classes.h1Classes}>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FontAwesomeIcon icon={faFacebookF}/>
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={faFacebookF}/>
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={faFacebookF}/>
            </a>
          </div>
          <span style={{ fontSize: "12px" }}>
            or use your email for registration
          </span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1 className={classes.h1Classes}>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FontAwesomeIcon icon={faFacebookF}/>
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={faFacebookF}/>
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={faFacebookF}/>
            </a>
          </div>
          <span style={{ fontSize: "12px" }}>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button onClick={() => setRightPanelActive(false)}>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className={classes.h1Classes}>Welcome Back!</h1>
            <p className={classes.pClasses}>
              To keep connected with us please login with your personal info
            </p>
            <button
              className="ghost"
              id="signIn"
              onClick={() => setRightPanelActive(false)}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className={classes.h1Classes}>Hello, Friend!</h1>
            <p className={classes.pClasses}>
              Enter your personal details and start journey with us
            </p>
            <button
              className="ghost"
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
