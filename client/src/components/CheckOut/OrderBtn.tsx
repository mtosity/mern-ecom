import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { CartStateInterface } from "../../Reducers/CartReducer";
import swa2 from "sweetalert2";
import { useHistory } from "react-router-dom";

export const OrderBtn = () => {
  const [ordering, setOrdering] = useState(false);
  const history = useHistory();
  const cart = useSelector<ApplicationState, CartStateInterface>(
    (state) => state.CartReducer
  );
  const authenticated = useSelector<ApplicationState, boolean>(
    (state) => state.GlobalReducer.authenticated
  );
  const orderPressed = async () => {
    if (cart.length > 0) {
      if (authenticated) {
        setOrdering(true);
        const res = await fetch("/api/order/all", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ order: cart }),
        });
        const msg = await res.json();
        if (res.status === 200) {
          swa2.fire(msg.message);
          history.replace("/");
        } else {
          console.log(msg);
          swa2.fire(msg.errors[0].message);
        }
      } else {
        swa2.fire("You have to login first ^^");
      }
      setOrdering(false);
    } else {
      swa2.fire("Cart is empty");
    }
  };
  return ordering ? (
    <div className="text-blue-600 font-semibold text-lg text-center">ORDERING FOR YOU ^^</div>
  ) : (
    <button
      className="flex justify-between font-bold items-center jo-font focus:outline-none px-6 py-3 mt-16 rounded
        bg-red-600 hover:bg-red-500 text-white shadow-lg transform duration-500 ml-4 items-center sm:px-4 sm:ml-0"
      onClick={() => orderPressed()}
    >
      <p className="">ORDER NOW</p>
    </button>
  );
};
