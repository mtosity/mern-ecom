import React, { useState, useEffect } from "react";
import { ProfileInput } from "./ProfileInput";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { UserType } from "../../DataType";
import { AccountStateInterface } from "../../Reducers/AccountReducer";
import Swal from "sweetalert2";
import { AccountActionType } from "../../Actions";
import { DotLoader } from "react-spinners";
import jwt from "jsonwebtoken";

export const Profile = () => {
  const user = useSelector<ApplicationState, AccountStateInterface>(
    (state) => state.AccountReducer
  );
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setName(user.name);
    setAddress(user.address);
    setPhone(user.phone);
  }, [user]);

  const updateProfile = async () => {
    const body = { name, phone, address, id: user.id };
    setLoading(true);
    const res = await fetch("/api/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      dispatch({ type: AccountActionType.AddAccount, payload: body });
      Swal.fire("Update successful!");
    } else {
      Swal.fire("Can not update!");
      const error = await res.json();
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 bg-white mr-4 shadow-lg" style={{ flex: 3 }}>
      <p className="uppercase jo-font font-bold text-lg my-4">
        You information
      </p>
      <p className="mt-2 text-red-600">Please update your info correctly</p>
      <p className="mt-2">Email (read only)</p>
      <input
        readOnly
        className="p-2 w-2/3 my-2 border border-gray-400 bg-gray-100 focus:bg-white outline-none sm:w-full"
        value={user.email}
      />
      <p className="mt-2">Full Name</p>
      <ProfileInput value={name} onChange={setName} />
      <p className="mt-2">Address</p>
      <ProfileInput value={address} onChange={setAddress} />
      <p className="mt-2">Phone</p>
      <ProfileInput value={phone} onChange={setPhone} />
      <div className="flex">
        <button
          className="flex justify-between font-bold items-center jo-font focus:outline-none px-6 py-3 
        bg-red-700 hover:bg-red-500 text-white shadow-lg transform duration-500 ml-4 mr-4 items-center sm:px-4 sm:ml-0 mt-4"
          onClick={updateProfile}
        >
          UPDATE
        </button>
        {loading ? <DotLoader color="red" /> : ""}
      </div>
    </div>
  );
};
