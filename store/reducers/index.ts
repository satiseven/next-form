import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { AppState } from "../../types/actions";
import { userReducer } from "./userReducer";
import { UserResponseIn } from "../../types/actions/userType";

export const rootReducer = combineReducers<AppState>({
  user: userReducer,
});
