import React from "react";
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
}

export const LoginForm = ({
  classes,
  styles,
  SIEmail,
  setSIEmail,
  SIPassword,
  setSIPassword,
  handleSIForm,
  loadSI
}: props) => {
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
    </form>
  );
};
