import { User } from "../user";
export const LOGIN_TEST = "LOGIN_TEST";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
interface login_test {
  type: typeof LOGIN_START;
}
interface login_error {
  type: typeof LOGIN_ERROR;
}
interface loginTest {
  type: typeof LOGIN_TEST;
}
interface loginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}
export type UserAction = login_test | login_error | loginSuccess | loginTest;
