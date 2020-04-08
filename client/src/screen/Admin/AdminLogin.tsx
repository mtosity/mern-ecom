import React, { useState } from "react";
import { AdminTitle } from "../../components/Admin/Content/AdminTitle";
import { AdminInput } from "../../components/Admin/Content/AdminInput";
import { AdminButton } from "../../components/Admin/Content/AdminButton";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AccountActionType, GlobalActionType } from "../../Actions";
import Swal from "sweetalert2";
import jwt from "jsonwebtoken";

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
          dispatch({ type: GlobalActionType.SetAuthenticatedTrue });
          dispatch({ type: AccountActionType.AddAccount, payload: user });
          localStorage.setItem(
            "auth-token",
            jwt.sign(user, process.env.REACT_APP_JWT || "")
          );
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
    <div className="w-screen h-screen bg-admin-topnav p-auto flex justify-center items-center sm:px-4">
      <div
        className="flex flex-col items-center justify-center rounded bg-admin-card py-16 sm:w-full"
        style={{ minWidth: "40vw" }}
      >
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
