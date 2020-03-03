import React, { useEffect } from "react";
import classnames from "classnames";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyncLoader } from "react-spinners";

interface props {
  classes: any;
  styles: any;
  SIEmail: string;
  setSIEmail: Function;
  SIPassword: string;
  setSIPassword: Function;
  handleSIForm: Function;
  loadSI: boolean;
  SIError: any;
}

export const LoginForm = ({
  classes,
  styles,
  SIEmail,
  setSIEmail,
  SIPassword,
  setSIPassword,
  handleSIForm,
  loadSI,
  SIError
}: props) => {
  const {isError, path, message} = SIError
  const emailInputClasses = classnames(classes.input,{
    "border border-red-600": (path === "email" && isError)
  });
  const passwordInputClasses = classnames(classes.input,{
    "border border-red-600": (path === "password" && isError)
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
          <SyncLoader size={20} color={"#54C6EB"} />
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
