import React, { useState } from "react";
import { AdminTitle } from "../../components/Admin/Content/AdminTitle";
import { AdminInput } from "../../components/Admin/Content/AdminInput";
import { AdminButton } from "../../components/Admin/Content/AdminButton";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AccountActionType, GlobalActionType } from "../../Actions";
import Swal from "sweetalert2";

export const AdminLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const login = () => {
    const body = { email, password };
    fetch("/api/user/login/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((user) => {
          console.log(user);
          dispatch({ type: GlobalActionType.SetAuthenticatedTrue });
          dispatch({ type: AccountActionType.AddAccount, payload: user });
          history.push("/admin/dashboard");
        });
      } else {
        res.json().then((msg) => {
          Swal.fire({
            title: `<p class="text-admin-title">${msg.errors[0].message}</p>`,
            icon: "error",
            background: "#1E2A31",
          });
        });
      }
    });
  };
  return (
    <div className="w-screen h-screen bg-admin-topnav flex flex-col justify-center items-center">
      <div className="w-2/3 flex flex-col justify-center items-center">
        <AdminTitle title="Username (admin)" />
        <AdminInput type="text" name="name" value={email} onChange={setEmail} />
        <AdminTitle title="Password (admin)" />
        <AdminInput
          type="password"
          name="password"
          value={password}
          onChange={setPass}
        />
        <AdminButton title="LOGIN" onClick={login} />
      </div>
    </div>
  );
};
