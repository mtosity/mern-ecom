"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Actions_1 = require("../Actions");
const INIT_STATE = {
    OpenLoginModal: false,
    authenticated: false
};
exports.GlobalReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case Actions_1.GlobalActionType.SetOpenLoginModalTrue:
            return { ...state, OpenLoginModal: true };
        case Actions_1.GlobalActionType.SetOpenLoginModalFalse:
            return { ...state, OpenLoginModal: false };
        case Actions_1.GlobalActionType.SetAuthenticatedTrue:
            return { ...state, authenticated: true };
        case Actions_1.GlobalActionType.SetAuthenticatedFalse:
            return { ...state, authenticated: false };
        case Actions_1.GlobalActionType.UserLoggedIn:
            return { ...state, authenticated: true, OpenLoginModal: false };
        default:
            return state;
    }
};
