import {
  GET_USERS,
  userActions,
  UserResponseIn,
} from "../../types/actions/userType";
const initialUser = {} as UserResponseIn;
export const userReducer = (
  state: UserResponseIn = initialUser,
  action: userActions
) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
