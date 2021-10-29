import { todoType } from "../../types/actions";
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
export type todoActions = addTodoAction | todoDoneAction;
