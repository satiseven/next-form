import { Dispatch } from "react";
import {
  GET_USERS,
  userActions,
  UsersGetAction,
} from "../../types/actions/userType";

export function getTheUsers() {
  return function (dispatch: Dispatch<UsersGetAction>) {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_USERS, payload: data }));
  };
}
