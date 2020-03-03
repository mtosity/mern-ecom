import React from "react";

import Modal from "react-modal";

import {Nav} from "../components/Nav";
import {Banner} from "../components/Banner";
import {SideCate} from "../components/SideCate";

import { useSelector, useDispatch } from "react-redux";
import { GlobalStateInterface } from "../Reducers/GlobalReducer";
import {LoginModal} from "../components/LoginModal";
import { GlobalActionType } from "../Actions";


const customStyles: any = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%) scale(0.5)",
    padding: "0 7px 15px 0",
    border: "none",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: "15px",
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

export const Home = () => {
  const OpenLoginModal = useSelector<GlobalStateInterface, boolean>(
    state => state.OpenLoginModal
  );
  const dispatcher = useDispatch();

  function openModal() {}

  function afterOpenModal() {
    customStyles.content = {
      ...customStyles.content, 
      transform: "translate(-50%, -50%) scale(1)",
      transition: "transform 150ms ease-out",
    }
  }

  function closeModal() {
    dispatcher({ type: GlobalActionType.SetOpLoginModalFalse });
    customStyles.content = {
      ...customStyles.content, 
      transform: "translate(-50%, -50%) scale(0.5)",
      transition: "transform 0",
    }
  }
  return (
    <div className="w-full">
      {/* navbar */}
      {/* banner and categories */}
      <a
        href=""
        className="w-full text-center text-blue-400 bg-gray-800 p-2 md:inline-block md:mt-2 hidden"
      >
        Categories
      </a>
      <div className="w-full flex md:mt-2">
        <div style={{ flex: 1 }} className="md:hidden mx-4">
          <SideCate />
        </div>
        <div style={{ flex: 4 }} className="shadow-md">
          <Banner />
        </div>
      </div>
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
