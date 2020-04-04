import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyncLoader } from "react-spinners";
import { GlobalActionType, AccountActionType } from "../../Actions";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";

interface props {
  classes: any;
  styles: any;
}

export const LoginForm = ({ classes, styles }: props) => {
  const dispatcher = useDispatch();
  let isMounted = true;
  useEffect(() => {
    return () => {
      isMounted = false;
    };
  }, []);

  const [SIEmail, setSIEmail] = useState("");
  const [SIPassword, setSIPassword] = useState("");
  const [SIError, setSIError] = useState({
    isError: false,
    path: "",
    message: ""
  });
  const [loadSI, setLoadSI] = useState(false);

  const handleSIForm = async (e: any) => {
    e.preventDefault();
    setLoadSI(true);
    const oldToken = await localStorage.getItem("token");
    if (!isMounted) {
      // var decoded = jwt.verify(oldToken, "123");
      // console.log(decoded);
      // setLoadSI(false);
      // dispatcher({ type: GlobalActionType.UserLoggedIn });
    } else {
      const body = {
        email: SIEmail,
        password: SIPassword
      };
      const response = await fetch("/api/user/login", {
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
      // const user = await response.json();
      // console.log(user);
      if (response.status === 200) {
        const user = await response.json();
        dispatcher({
          type: AccountActionType.AddAccount,
          payload: user
        });
        localStorage.setItem("auth-token", jwt.sign(user, "123"));
        setLoadSI(false);
        dispatcher({ type: GlobalActionType.UserLoggedIn });
      } else {
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
  const emailInputClasses = classnames(classes.input, {
    "border border-red-600": path === "email" && isError
  });
  const passwordInputClasses = classnames(classes.input, {
    "border border-red-600": path === "password" && isError
  });
  return (
    <form className={classes.form} action="#" style={{ zIndex: 999 }}>
      <h1 className={classes.h1}>Login</h1>
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
        className={emailInputClasses}
        type="email"
        placeholder="Email"
        value={SIEmail}
        onChange={e => setSIEmail(e.target.value)}
      />
      <input
        className={passwordInputClasses}
        type="password"
        placeholder="Password"
        value={SIPassword}
        onChange={e => setSIPassword(e.target.value)}
      />
      <a href="#" className={classes.aclasses}>
        Forgot your password?
      </a>
      {loadSI ? (
        <div className="mt-4 text-blue-400">
          <SyncLoader size={20} color="red" />
        </div>
      ) : (
        <button
          className={classes.button}
          style={styles.button}
          onClick={e => handleSIForm(e)}
        >
          Login
        </button>
      )}
      <p className="text-red-500 text-md mt-2">{message}</p>
    </form>
  );
};
