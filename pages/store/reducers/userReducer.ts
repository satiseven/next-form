import { User, userState } from "../../../types/user";
import { LOGIN_TEST, UserAction } from "../actions";
const initalState: userState = {
  date: {} as User,
  error: "",
  loading: false,
};
const userReducer = (state: userState = initalState, action: UserAction) => {
  switch (action.type) {
    case LOGIN_TEST:
      alert("this is test UserReducer");
      return state;

    default:
      return state;
  }
  return state;
};
export default userReducer;
