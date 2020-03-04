import React, { useEffect } from "react";
import { Dispatch, Action } from "redux";
import { GlobalActionType } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GlobalStateInterface } from "../../Reducers/GlobalReducer";
import { AccountStateInterface } from "../../Reducers/AccountReducer";

import Modal from "react-modal";
import { LoginModal } from "../LoginModal";
import { ApplicationState } from "../../Reducers/CombinedReducers";
Modal.setAppElement("#root");

const customStyles: any = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%) scale(0.5)",
    padding: "0",
    overflow: "hidden",
    boxShadow: "5px 10px",
    border: "none",
    borderRadius: "20px"
  },
  overlay: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,.6)",
    zIndex: 20
  }
};

export function OptionsNav() {
  const dispatcher = useDispatch();
  const OpenLoginModal = useSelector<ApplicationState, boolean>(
    state => state.GlobalReducer.OpenLoginModal
  );
  const authenticated = useSelector<ApplicationState, boolean>(
    state => state.GlobalReducer.authenticated
  );
  const UserName = useSelector<ApplicationState, string>(
    state => state.AccountReducer.name
  );
  // const UserName = useSelector<AccountStateInterface, string>(
  //   state => state.name
  // )

  function openModal() {}

  function afterOpenModal() {
    customStyles.content = {
      ...customStyles.content,
      transform: "translate(-50%, -50%) scale(1)",
      transition: "transform 300ms ease-out"
    };
  }

  function closeModal() {
    dispatcher({ type: GlobalActionType.SetOpenLoginModalFalse });
    customStyles.content = {
      ...customStyles.content,
      transform: "translate(-50%, -50%) scale(0.5)",
      transition: "transform 0"
    };
  }
  return (
    <div
      className="grid grid-cols-12 text-center md:grid-cols-7 text-sm text-blue-400 font-bold shadow	"
      style={{ background: "linear-gradient( #00387d,#2C3748)" }}
    >
      <Link to="/appdownload" className="btn-nav col-span-3">
        SAVE MORE ON APP
      </Link>
      <a href="" className="btn-nav col-span-2">
        SELL ON LAZADA
      </a>
      <a href="" className="btn-nav col-span-2">
        CUSTOMER CARE
      </a>
      <a href="" className="btn-nav col-span-2 md:col-span-3">
        TRACK MY ORDER
      </a>
      {authenticated ? (
        <a className="btn-nav col-span-3 md:col-span-4 hover:cursor-pointer">{UserName}</a>
      ) : (
        <a
          className="btn-nav col-span-3 md:col-span-4 hover:cursor-pointer"
          onClick={() =>
            dispatcher({ type: GlobalActionType.SetOpenLoginModalTrue })
          }
        >
          LOGIN / SIGN UP
        </a>
      )}
      {/* Login modal, open when click sign in/sign up */}
      <Modal
        isOpen={OpenLoginModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <LoginModal />
      </Modal>
    </div>
  );
}
