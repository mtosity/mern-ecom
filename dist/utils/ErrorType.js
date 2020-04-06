"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginError = {
    UserNotExisted: "User does not exist",
    WrongPass: "Wrong pass",
    AdminNotExisted: "Can not find admin with this email"
};
exports.SignUpError = {
    UserExisted: "User existed",
    NotEmail: "Not an valid email",
    NotPassword: "Password not contain at least one uppercase, one number or special character",
    NotName: "Name empty",
    NotAddress: "Address is empty",
    NotPhone: "Phone number is empty",
};
