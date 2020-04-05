import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "react-modal";
import { LoginModal } from "../LoginModal";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { useDispatch, useSelector } from "react-redux";
import { GlobalActionType } from "../../Actions";
import { faUser } from "@fortawesome/free-regular-svg-icons";
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

export const AccountNav = () => {
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
    <div>
      <button
        className="flex items-center justify-center border border-red-400 rounded focus:outline-none h-8 w-40"
        onClick={() =>
          dispatcher({ type: GlobalActionType.SetOpenLoginModalTrue })
        }
      >
        <FontAwesomeIcon icon={faUser} color="red" />
      <p className="ml-2 text-red-600">{
        authenticated ? UserName : "Account"
      }</p>
      </button>
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
};
