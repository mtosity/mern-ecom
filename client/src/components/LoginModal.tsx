//Speacial thanks to traversi media, https://www.youtube.com/watch?v=mUdo6w87rh4

import React, { useState } from "react";
import classnames from "classnames";
import { LoginForm } from "./LoginModal/LoginForm";
import { SignUpForm } from "./LoginModal/SignUpForm";
import { OverlayPanel } from "./LoginModal/OverlayPanel";

import "../styles/LoginModal.css";
const classes = {
  h1: "text-xl font-bold m-0",
  p: "text-sm my-4 mb-8 leading-relaxed font-hairline tracking-wider",
  span: "text-xs",
  aclasses: "social text-black text-xs no-underline mx-4",
  button:
    "mt-4 rounded-full border-2 text-white text-sm font-bold px-10 py-2 login-modal-btn",
  form:
    "bg-white flex flex-col items-center px-8 h-full text-center py-16 border-none",
  input: "w-full py-2 px-4 my-2 outline-none rounded"
};
const styles = {
  button: {
    backgroundColor: "#FF4B2B",
    border: "1px solid #FF4B2B"
  }
};

export function LoginModal() {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  let containerClass = classnames(
    "login-modal-container",
    {
      "login-modal-right-panel-active": rightPanelActive
    },
    ""
  );
  return (
    <div className={containerClass} id="login-modal-container">
      <div className="login-modal-form-container login-modal-sign-up-container">
        <SignUpForm classes={classes} styles={styles} />
      </div>
      <div className="login-modal-form-container login-modal-sign-in-container">
        <LoginForm classes={classes} styles={styles} />
      </div>
      <div className="login-modal-overlay-container">
        <OverlayPanel
          classes={classes}
          setRightPanelActive={setRightPanelActive}
        />
      </div>
    </div>
  );
}
