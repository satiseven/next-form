import { bookAction } from "../../types/actions";
import { booksInterface } from "../../types/models/book";

const initialState: booksInterface = {
  author: "",
  img: "",
  title: "",
  id: 1,
  userId: 1,
};
export const bookReducer = (
  state: booksInterface = initialState,
  action: bookAction
) => {
  return state;
};
