import { ADD_BOOK, BookAction, BOOK_LIST, UserAction } from "../actions";

export interface booksIn {
  title: string;
  price: number;
  author: string;
}
export interface userIn {
  name: string;
  family: string;
  phone: string;
}
export interface storeIn {
  books: booksIn[];
  user: userIn;
}
const INITAL_STATE: storeIn = {
  books: [
    { author: "riza", price: 210, title: "I don't Know" },
    { author: "Memed", price: 110, title: "We Just Trying to Know" },
  ],
  user: {
    family: "Guli zade",
    name: "Riza",
    phone: "5392078492",
  },
};
export const storeReducer = (
  state: storeIn = INITAL_STATE,
  action: UserAction
): storeIn => {
  switch (action.type) {
    case BOOK_LIST:
      return state;
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload as booksIn],
      };

    default:
      return state;
  }
};
