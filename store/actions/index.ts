import { booksIn } from "../reducer";

export const ADD_BOOK = "ADD_BOOK";
export const BOOK_LIST = "BOOK_LIST";
const AddBook = (book: booksIn) => ({
  type: ADD_BOOK,
  payload: book,
});
export type BookAction = { type: "BOOK_LIST"; payload: string };

const BookList = () => ({
  type: BOOK_LIST,
  payload: "",
});
export type UserAction = ReturnType<typeof AddBook | typeof BookList>;
