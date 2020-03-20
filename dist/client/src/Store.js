"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CombinedReducers_1 = require("./Reducers/CombinedReducers");
const redux_1 = require("redux");
exports.default = redux_1.createStore(CombinedReducers_1.CombinedReducers);
