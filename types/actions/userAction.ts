import { userInterface } from "../../types/actions/userTypes";
export const USER_GET = "GET_USER";
export const USER_EDIT = "USER_EDIT";
export type getUser = () => {
  type: typeof USER_GET;
};
export type editUser = () => {
  type: typeof USER_EDIT;
  payload: userInterface;
};
export type userActions = getUser | editUser;
