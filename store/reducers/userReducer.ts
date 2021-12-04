import { SET_USERS_LIST, userAction } from "../../types/actions";
import { userInterface } from "../../types/models/user";
const initialState: userInterface[] = [];
export const userReducer = (
  state: userInterface[] = initialState,
  action: userAction
) => {
  switch (action.type) {
    case SET_USERS_LIST:
      return action.payload;

    default:
      return state;
  }
};
