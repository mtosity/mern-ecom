//Speacial thanks to traversi media, https://www.youtube.com/watch?v=mUdo6w87rh4

import React, { useState } from "react";
import classnames from "classnames";
import jwt from "jsonwebtoken";

import { useDispatch } from "react-redux";
import { GlobalActionType } from "../Actions";
import { LoginForm } from "./LoginModal/LoginForm";
import { SignUpForm } from "./LoginModal/SignUpForm";
import { ChangeTransition } from "./LoginModal/ChangeTransition";

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
    backgroundColor: "#54C6EB",
    borderColor: "#54C6EB"
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
  const [SIError, setSIError] = useState({
    isError: false,
    path: "",
    message: ""
  });

  const [SUName, setSUName] = useState("");
  const [SUEmail, setSUEmail] = useState("");
  const [SUPassword, setSUPassword] = useState("");

  const [loadSI, setLoadSI] = useState(false);
  const [loadSU, setLoadSU] = useState(false);
  const [SUError, setSUError] = useState({
    isError: false,
    path: "",
    message: ""
  });

  const handleSIForm = async (e: any) => {
    e.preventDefault();
    setLoadSI(true);
    const oldToken = await localStorage.getItem("token");
    if (false) {
      // var decoded = jwt.verify(oldToken, "123");
      // console.log(decoded);
      // setLoadSI(false);
      // dispatcher({ type: GlobalActionType.UserLoggedIn });
    } else {
      const body = {
        email: SIEmail,
        password: SIPassword
      };
      const response = await fetch("user/login", {
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
      const res_json = await response.json();
      if (response.status === 200) {
        await localStorage.setItem("token", res_json.token);
        dispatcher({ type: GlobalActionType.UserLoggedIn });
      } else {
        setSIError({
          isError: true,
          path: res_json.errors[0].path,
          message: res_json.errors[0].message
        });
      }
      setLoadSI(false);
    }
  };

  const handleSUForm = async (e: any) => {
    setLoadSU(true);
    e.preventDefault();
    const body = {
      email: SUEmail,
      password: SUPassword,
      name: SUName
    };
    const response = await fetch("user/signup", {
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
    const res_json = await response.json(); // parses JSON response into native JavaScript objects
    if (response.status === 200) {
      setSUError({
        isError: false,
        path: "",
        message: "Create new account successful"
      });
    } else {
      setSUError({
        isError: true,
        path: res_json.errors[0].path,
        message: res_json.errors[0].message
      });
    }
    setLoadSU(false);
  };
  return (
    <div className={containerClass} id="login-modal-container">
      <div className="login-modal-form-container login-modal-sign-up-container">
        <SignUpForm
          classes={classes}
          styles={styles}
          SUEmail={SUEmail}
          SUPassword={SUPassword}
          SUName={SUName}
          setSUEmail={setSUEmail}
          setSUPassword={setSUPassword}
          setSUName={setSUName}
          handleSUForm={handleSUForm}
          loadSU={loadSU}
          SUError={SUError}
        />
      </div>
      <div className="login-modal-form-container login-modal-sign-in-container">
        <LoginForm
          classes={classes}
          styles={styles}
          SIEmail={SIEmail}
          SIPassword={SIPassword}
          setSIEmail={setSIEmail}
          setSIPassword={setSIPassword}
          handleSIForm={handleSIForm}
          loadSI={loadSI}
          SIError={SIError}
        />
      </div>
      <div className="login-modal-overlay-container">
        <ChangeTransition
          classes={classes}
          setRightPanelActive={setRightPanelActive}
        />
      </div>
    </div>
  );
}
