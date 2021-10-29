import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { AppState, todoIn } from "../../types/actions";
import todoReducer from "./todo";

const rootReducer = combineReducers<AppState>({
  todo: todoReducer,
});
export default rootReducer;
