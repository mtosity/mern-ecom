import React from "react";
import classnames from "classnames";

interface props {
  classes: any;
  setRightPanelActive: Function;
}
export const OverlayPanel = ({ classes, setRightPanelActive }: props) => {
  return (
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
  );
};
