import { todoType } from "../../types/actions";
import { ADD_TODO, DONE_TODO, todoActions } from "../actions";
const initalTodo: todoType = {} as todoType;
const todoReducer = (state = initalTodo, action: todoActions) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: { ...state.todo, ...action.payload },
      };
    case DONE_TODO:
    default:
      return {
        state,
      };
  }
};
export default todoReducer;
