import { AppState, todoType } from "../../types/actions";
import axios from "axios";
import { Dispatch } from "react";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const DONE_TODO = "DONE_TODO";

interface addTodoAction {
  type: typeof ADD_TODO;
  payload: todoType;
}
interface todoDoneAction {
  type: typeof DONE_TODO;
  payload: todoType;
}

export function fetchAllToDo() {
  return function (dispatch: Dispatch<addTodoAction>) {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ADD_TODO, payload: data }));
  };
}

export type todoActions = addTodoAction | todoDoneAction;
