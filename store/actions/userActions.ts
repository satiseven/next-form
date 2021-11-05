import { Dispatch } from "react";
import {
  GET_USERS,
  userActions,
  UsersGetAction,
} from "../../types/actions/userType";

export function getTheUsers() {
  return function (dispatch: Dispatch<UsersGetAction>) {
    alert(2);
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_USERS, payload: data }));
  };
}
