import React from "react";
import FacebookLogin from "react-facebook-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { AccountActionType, GlobalActionType } from "../../Actions";

interface props {
  setMsg: Function;
  setLoadSI: Function;
}

export const FacebookLoginBtn = ({ setMsg, setLoadSI }: props) => {
  const dispatch = useDispatch();

  const responseFacebook = async (fbRes: any) => {
    setLoadSI(false);
    const { email, name, userID } = fbRes;
    const avatar = fbRes.picture.data.url;
    const body = {
      email,
      password: userID,
      avatar,
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
      dispatch({ type: GlobalActionType.UserLoggedIn });
    } else {
      const msg = await res.json();
      console.log(msg);
      setMsg(msg.errors[0].message);
    }
    setLoadSI(true);
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_AUTH || ""}
      autoLoad={false}
      textButton="Login"
      fields="name,email,picture"
      // onClick={componentClicked}
      callback={responseFacebook}
      cssClass="flex p-4 justify-center items-center shadow ml-4"
      icon={
        <FontAwesomeIcon
          icon={faFacebook}
          size="lg"
          color="blue"
          className="mr-4"
        />
      }
    />
  );
};
