import React, { useState } from "react";
import classnames from "classnames";
import { SyncLoader } from "react-spinners";

interface props {
  classes: any;
  styles: any;
}

export const SignUpForm = ({
  classes,
  styles,
}: props) => {
  const [SUName, setSUName] = useState("");
  const [SUEmail, setSUEmail] = useState("");
  const [SUPassword, setSUPassword] = useState("");
  const [SUAddress, setSUAddress] = useState("");
  const [SUIsSeller, setSUIsSeller] = useState(false);
  const [SUIsBuyer, setSUIsBuyer] = useState(false);
  const [loadSU, setLoadSU] = useState(false);
  const [SUError, setSUError] = useState({
    isError: false,
    path: "",
    message: ""
  });
  const handleSUForm = async (e: any) => {
    setLoadSU(true);
    e.preventDefault();
    const body = {
      email: SUEmail,
      password: SUPassword,
      name: SUName,
      address: SUAddress,
      isSeller: SUIsSeller,
      isBuyer: SUIsBuyer
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
  const addressInputClasses = classnames(classes.input, {
    "border border-red-600": path === "address" && isError
  });
  return (
    <form className={classes.form} action="#">
      <h1 className={classes.h1}>Create Account</h1>
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
      <input
        className={addressInputClasses}
        type="address"
        placeholder="Address"
        value={SUAddress}
        onChange={e => setSUAddress(e.target.value)}
      />
      <div className="flex justify-around w-full">
        <div className="flex justify-center items-center">
          <input
            type="checkbox"
            name="buyer"
            checked={SUIsBuyer}
            onChange={() => setSUIsBuyer(!SUIsBuyer)}
          />
          <p className="ml-2 mt-1">Shopping</p>
        </div>
        <div className="flex justify-center items-center">
          <input
            type="checkbox"
            name="seller"
            checked={SUIsSeller}
            onChange={() => setSUIsSeller(!SUIsSeller)}
          />
          <p className="ml-2 mt-1">Selling</p>
        </div>
      </div>
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
        <p className="text-red-500 text-sm mt-2">{message}</p>
      ) : (
        <p className="text-green-500 mt-2 font-medium tracking-wide">
          {message}
        </p>
      )}
    </form>
  );
};
