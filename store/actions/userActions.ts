import { Dispatch } from "react";
import { apiUrl } from "../../config/api";
import { usersList, SET_USERS_LIST } from "./../../types/actions";

export function setUsersList() {
  return function (dispatch: Dispatch<usersList>) {
    fetch(`${apiUrl}/users`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: SET_USERS_LIST, payload: data }));
  };
}
