import React from "react";
import classnames from "classnames";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyncLoader } from "react-spinners";

interface props {
  classes: any;
  styles: any;
  SUEmail: string;
  setSUEmail: Function;
  SUPassword: string;
  setSUPassword: Function;
  SUName: string;
  setSUName: Function;
  handleSUForm: Function;
  loadSU: boolean;
  SUError: any;
}

export const SignUpForm = ({
  classes,
  styles,
  SUEmail,
  setSUEmail,
  SUPassword,
  setSUPassword,
  SUName,
  setSUName,
  handleSUForm,
  loadSU,
  SUError
}: props) => {
  const { isError, path, message } = SUError;
  const emailInputClasses = classnames(classes.input, {
    "border border-red-600": path === "email" && isError
  });
  const passwordInputClasses = classnames(classes.input, {
    "border border-red-600": path === "password" && isError
  });
  const nameInputClasses = classnames(classes.input, {
    "border border-red-600": path === "name" && isError
  });
  return (
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
      <span className={classes.span}>or use your email for registration</span>
      <input
        className={nameInputClasses}
        type="text"
        placeholder="Name"
        value={SUName}
        onChange={e => setSUName(e.target.value)}
      />
      <input
        className={emailInputClasses}
        type="email"
        placeholder="Email"
        value={SUEmail}
        onChange={e => setSUEmail(e.target.value)}
      />
      <input
        className={passwordInputClasses}
        type="password"
        placeholder="Password"
        value={SUPassword}
        onChange={e => setSUPassword(e.target.value)}
      />
      {loadSU ? (
        <div className="mt-4 text-blue-400">
          <SyncLoader size={20} color={"#54C6EB"} />
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
      {isError ? (
        <p className="text-red-500 text-md mt-2">{message}</p>
      ) : (
        <p className="text-green-400 text-md mt-2 font-medium">{message}</p>
      )}
    </form>
  );
};
