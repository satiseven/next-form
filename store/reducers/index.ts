import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./userReducers";

export const reducer = combineReducers({ user: userReducer });
