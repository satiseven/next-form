export const USER_GET = "USER_GET";
export const USERS_LIST = "USERS_LIST";
export type usersList = () => {
  type: typeof USERS_LIST;
};
export type userGet = () => {
  type: typeof USER_GET;
};
export type userAction = usersList | userGet;
