"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalActionType;
(function (GlobalActionType) {
    GlobalActionType["SetOpenLoginModalTrue"] = "Global/SetOpenLoginModalTrue";
    GlobalActionType["SetOpenLoginModalFalse"] = "Global/SetOpenLoginModalFalse";
    GlobalActionType["SetAuthenticatedTrue"] = "Global/SetAuthenticatedTrue";
    GlobalActionType["SetAuthenticatedFalse"] = "Global/SetAuthenticatedFalse";
    GlobalActionType["UserLoggedIn"] = "Global/UserLoggedIn";
})(GlobalActionType = exports.GlobalActionType || (exports.GlobalActionType = {}));
var AccountActionType;
(function (AccountActionType) {
    AccountActionType["AddAccount"] = "AccountActionType/AddAccount";
    AccountActionType["DeleteAccount"] = "AccountActionType/DeleteAccount";
})(AccountActionType = exports.AccountActionType || (exports.AccountActionType = {}));
