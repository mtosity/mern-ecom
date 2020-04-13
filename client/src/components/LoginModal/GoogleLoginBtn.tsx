import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { AccountActionType, GlobalActionType } from "../../Actions";
import jwt from "jsonwebtoken";

interface props {
  setMsg: Function;
  setLoadSI: Function;
}

export const GoogleLoginBtn = ({ setMsg, setLoadSI }: props) => {
  const dispatch = useDispatch();
  const responseGoogle = async (googleRes: any) => {
    setLoadSI(false);
    const { email, name, imageUrl, googleId } = googleRes.profileObj;
    const body = {
      email,
      password: googleId,
      avatar: imageUrl,
      name,
      role: "user",
      address: "",
      phone: "",
    };
    const res = await fetch("/api/user/loginwithfg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const user = await res.json();
      dispatch({
        type: AccountActionType.AddAccount,
        payload: user,
      });
      localStorage.setItem(
        "auth-token",
        jwt.sign(user, process.env.REACT_APP_JWT || "")
      );
      dispatch({ type: GlobalActionType.UserLoggedIn });
    } else {
      const msg = await res.json();
      console.log(msg);
      setMsg(msg.errors[0].message);
    }
    setLoadSI(true);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_AUTH || ""}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};
