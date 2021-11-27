import { userInterface } from "../models/user";
export const USER_GET = "USER_GET";
export const GET_USERS_LIST = "GET_USERS_LIST";
export const SET_USERS_LIST = "SET_USERS_LIST";
export type usersList = {
  type: typeof SET_USERS_LIST;
  payload: userInterface[];
};
export type userGet = {
  type: typeof USER_GET;
};
export type usersListGet = {
  type: typeof GET_USERS_LIST;
};
export type userAction = usersList | userGet;
