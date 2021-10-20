import { combineReducers } from "redux";
import { userState } from "../../../types/user";
import { recordReducer } from "./recordReducer";
import userReducer from "./userReducer";

interface AppState {
  user: userState;
  //   categories: any;
  records: any;
}
const rootReducer = combineReducers<AppState>({
  user: userReducer,
  //   categories: () => {},
  records: recordReducer,
});
export default rootReducer;
