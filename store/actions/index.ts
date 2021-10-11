import { useDispatch } from "react-redux";
import { booksIn } from "../reducer";

export const ADD_BOOK = "ADD_BOOK";
export const BOOK_LIST = "BOOK_LIST";
export const AddBook = (book: booksIn) => ({
  type: ADD_BOOK,
  payload: book,
});
export type BookAction = { type: typeof BOOK_LIST; payload: string };

const BookList = () => ({
  type: BOOK_LIST,
  payload: "",
});

export const AddNewBook = (book: booksIn) => {
  const dispatch = useDispatch();
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};
export type UserAction = ReturnType<typeof AddBook | typeof BookList>;
