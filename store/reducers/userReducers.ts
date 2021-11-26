import { userActions } from "../../types/actions/userAction";
import { userInterface } from "../../types/actions/userTypes";

const initials: userInterface = {
  email: "",
  family: "",
  id: 1,
  name: "",
  tc: "",
};
export const userReducer = (
  state: userInterface = initials,
  action: userActions
) => {
  return state;
};
