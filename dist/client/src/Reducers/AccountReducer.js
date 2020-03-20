"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Actions_1 = require("../Actions");
const INIT_STATE = {
    email: "",
    roleId: -1,
    name: "",
    avatar: "",
    address: ""
};
exports.AccountReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case Actions_1.AccountActionType.AddAccount:
            return action.payload;
        case Actions_1.AccountActionType.DeleteAccount:
            return JSON.parse(JSON.stringify(INIT_STATE));
        default:
            return state;
    }
};
