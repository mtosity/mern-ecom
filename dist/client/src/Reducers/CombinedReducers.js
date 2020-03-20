"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const AccountReducer_1 = require("./AccountReducer");
const GlobalReducer_1 = require("./GlobalReducer");
exports.CombinedReducers = redux_1.combineReducers({
    AccountReducer: AccountReducer_1.AccountReducer,
    GlobalReducer: GlobalReducer_1.GlobalReducer
});
