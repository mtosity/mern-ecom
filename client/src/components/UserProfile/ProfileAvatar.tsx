import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import Swal from "sweetalert2";
import { DotLoader } from "react-spinners";
import { AccountActionType, GlobalActionType } from "../../Actions";
import { useHistory } from "react-router-dom";

export const ProfileAvatar = () => {
  const avatar = useSelector<ApplicationState, string>(
    (state) => state.AccountReducer.avatar
  );
  const id = useSelector<ApplicationState, string>(
    (state) => state.AccountReducer.id
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const [picture, setPicture] = useState<File>();
  const [loading, setLoading] = useState(false);

  const changeAva = async () => {
    if (picture) {
      setLoading(true);
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `Bearer ${process.env.REACT_APP_IMGUR_AUTH}`
      );

      var formdata = new FormData();
      formdata.append("image", picture);
      formdata.append("name", "Ryo");

      var requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch("https://api.imgur.com/3/image", requestOptions)
        .then((response) => response.json())
        .then(async (result) => {
          const avatar = result.data.link;
          const body = { avatar, id };
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
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.text);
          setLoading(false);
        });
    } else {
      Swal.fire("Choose your image!");
    }
  };
  const logOut = () => {
    dispatch({ type: AccountActionType.DeleteAccount });
    localStorage.removeItem("auth-token");
    dispatch({ type: GlobalActionType.UserLoggedOut });
    history.replace("/");
  };
  return (
    <div className="sm:mt-4" style={{ flex: 1 }}>
      <p className="uppercase jo-font font-bold text-lg mb-8">
        Profile Picture
      </p>
      <div className="bg-white shadow-lg p-4" style={{ flex: 1 }}>
        <img
          src={avatar}
          alt=""
          className=" rounded-full m-auto w-32 h-32 object-contain shadow-lg border border-gray-200"
        />
        <div className="w-full flex justify-center flex-col items-center mt-4">
          <p className="text-lg">Change Your Avatar</p>
          <input
            type="file"
            className="py-2 px-4 border-red-600 text-red-600 border rounded focus:outline-none"
            onChange={(e) => {
              if (e.target.files) {
                setPicture(e.target.files[0]);
              }
            }}
          ></input>
          <div className="flex">
            <button
              className="flex justify-between font-bold items-center jo-font focus:outline-none px-6 py-3 
            bg-red-700 hover:bg-red-500 text-white shadow-lg transform duration-500 ml-4 items-center sm:px-4 sm:ml-0 mt-4 mr-2"
              onClick={changeAva}
            >
              UPDATE
            </button>
            {loading ? <DotLoader color="red" /> : ""}
          </div>
        </div>
      </div>
      <button
        className="flex justify-center px-6 py-3 items-center border border-red-600 text-red-600 rounded mt-8"
        onClick={logOut}
      >
        LOGOUT
      </button>
    </div>
  );
};
