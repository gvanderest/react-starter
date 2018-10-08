import { combineReducers, createStore } from "redux";
import { reduxReducers } from "../settings";

export default createStore(combineReducers(reduxReducers));
