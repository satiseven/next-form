export const USER_INFO = "USER_INFO";
export const USER_LIST = "USER_LIST";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIOUS_PAGE = "PREVIOUS_PAGE";
export const GET_USERS = "GET_USERS";
export interface userIn {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface UserResponseIn {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: userIn[];
}
export type userInfoAction = {
  type: typeof USER_INFO;
  payload: userIn;
};

export type UserNextPageAction = {
  type: typeof NEXT_PAGE;
  payload: UserResponseIn;
};
export type UsersGetAction = {
  type: typeof GET_USERS;
  payload: UserResponseIn;
};
export type UserPreviousPageAction = {
  type: typeof PREVIOUS_PAGE;
  payload: UserResponseIn;
};
export type userActions =
  | UserPreviousPageAction
  | UserNextPageAction
  | UsersGetAction
  | userInfoAction;
