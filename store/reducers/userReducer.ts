import { userAction } from "../../types/actions";
import { userInterface } from "../../types/models/user";
const initialState: userInterface = {
  avatar: "",
  city: "",
  country: "",
  createdAt: new Date(),
  email: "",
  id: 1,
  name: "",
  state: 1,
  username: "",
};
export const userReducer = (
  state: userInterface = initialState,
  action: userAction
) => {
  return state;
};
