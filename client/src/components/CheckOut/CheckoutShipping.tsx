import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { AccountStateInterface } from "../../Reducers/AccountReducer";

export const CheckoutShipping = () => {
  const user = useSelector<ApplicationState, AccountStateInterface>(
    (state) => state.AccountReducer
  );
  return (
    <div className="w-2/3 sm:w-full">
      <div className="w-full border-b border-gray-600 mt-4 mb-8"></div>
      <div className="bg-white cursor-auto shadow-lg">
        <div style={{ marginLeft: "15%" }} className="text-lg pt-8">
          <p className="jo-font font-bold text-xl">SHIP TO</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <p>Phone: {user.phone}</p>
        </div>
        <img
          src="https://www.maidenform.com/images/static/deliverymethods_customerservice_061019.png"
          alt=""
          className="mx-auto"
        />
      </div>
    </div>
  );
};
