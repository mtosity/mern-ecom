import React from "react";
import { Dispatch, Action } from "redux";
import { GlobalActionType } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GlobalStateInterface } from "../../Reducers/GlobalReducer";

import Modal from "react-modal";
import { LoginModal } from "../LoginModal";
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
  const OpenLoginModal = useSelector<GlobalStateInterface, boolean>(
    state => state.OpenLoginModal
  );
  const dispatcher = useDispatch();

  function openModal() {}

  function afterOpenModal() {
    customStyles.content = {
      ...customStyles.content,
      transform: "translate(-50%, -50%) scale(1)",
      transition: "transform 150ms ease-out"
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
  const authenticated = useSelector<GlobalStateInterface, boolean>(
    state => state.authenticated
  );
  return (
    <div
      className="grid grid-cols-6 text-center md:grid-cols-3 text-sm text-blue-400 font-bold shadow	"
      style={{ background: "linear-gradient( #00387d,#2C3748)" }}
    >
      <Link to="/appdownload" className="btn-nav">
        SAVE MORE ON APP
      </Link>
      <a href="" className="btn-nav">
        SELL ON LAZADA
      </a>
      <a href="" className="btn-nav">
        CUSTOMER CARE
      </a>
      <a href="" className="btn-nav">
        TRACK MY ORDER
      </a>
      {authenticated ? (
        <a className="btn-nav col-span-2 hover:cursor-pointer">User</a>
      ) : (
        <a
          className="btn-nav col-span-2 hover:cursor-pointer"
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
