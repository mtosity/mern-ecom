import React, { useState } from "react";
import { AdminTitle } from "../Content/AdminTitle";
import { AdminInputTitle } from "../Content/AdminInputTitle";
import { AdminInput } from "../Content/AdminInput";
import { AdminButton } from "../Content/AdminButton";
import swa2 from "sweetalert2";

export const AdminOrdersDelivered = () => {
  const [orderID, setOrderID] = useState("");

  const markDelivered = () => {
    fetch(`/api/order/delivered/${orderID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((msg) => {
          swa2.fire(msg.message);
        });
      } else {
        res.json().then((msg) => {
          swa2.fire(msg.errors[0].message);
        });
      }
    });
  };

  const markOrdered = () => {
    fetch(`/api/order/ordered/${orderID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((msg) => {
          swa2.fire({
            title: `<p class="text-admin-title">${msg.message}</p>`,
            icon: "success",
            background: "#1E2A31",
          });
        });
      } else {
        res.json().then((msg) => {
          swa2.fire({
            title: `<p class="text-admin-title">${msg.errors[0].message}</p>`,
            icon: "error",
            background: "#1E2A31",
          });
        });
      }
    });
  };

  return (
    <>
      <AdminTitle title="Mark order delivered" />
      <AdminInputTitle title="Order ID" />
      <AdminInput
        name="orderID"
        type="text"
        value={orderID}
        onChange={setOrderID}
      />
      <div>
        <AdminButton title="Mared delivered" onClick={markDelivered} />
        <AdminButton title="Mared ordered" onClick={markOrdered} />
      </div>
    </>
  );
};
