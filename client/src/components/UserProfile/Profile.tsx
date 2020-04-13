import React, { useState, useEffect } from "react";
import { ProfileInput } from "./ProfileInput";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { UserType } from "../../DataType";
import { AccountStateInterface } from "../../Reducers/AccountReducer";
import Swal from "sweetalert2";

export const Profile = () => {
  const user = useSelector<ApplicationState, AccountStateInterface>(
    (state) => state.AccountReducer
  );
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);

  useEffect(() => {
    setEmail(user.email);
    setName(user.name);
    setAddress(user.address);
    setPhone(user.phone);
  }, [user]);

  const updateProfile = async () => {
    const body = { email, name, phone, address, id: user.id };
    const res = await fetch("/api/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      Swal.fire("Update successful!");
    } else {
      Swal.fire("Can not update!");
    }
  };

  return (
    <div className="p-4 bg-white mr-4 shadow-lg" style={{ flex: 3 }}>
      <p className="uppercase jo-font font-bold text-lg my-4">
        You information
      </p>
      <p className="mt-2">Please update your info</p>
      <p className="mt-2">Email</p>
      <ProfileInput value={email} onChange={setEmail} />
      <p className="mt-2">Full Name</p>
      <ProfileInput value={name} onChange={setName} />
      <p className="mt-2">Address</p>
      <ProfileInput value={address} onChange={setAddress} />
      <p className="mt-2">Phone</p>
      <ProfileInput value={phone} onChange={setPhone} />
      <button
        className="flex justify-between font-bold items-center jo-font focus:outline-none px-6 py-3 
    bg-red-700 hover:bg-red-500 text-white shadow-lg transform duration-500 ml-4 items-center sm:px-4 sm:ml-0 mt-4"
        onClick={updateProfile}
      >
        UPDATE
      </button>
    </div>
  );
};
