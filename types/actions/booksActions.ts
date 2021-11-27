export const BOOK_GET = "BOOK_GET";
export const BOOKS_LIST = "BOOKS_LIST";
export type booksList = () => {
  type: typeof BOOKS_LIST;
};
export type bookGet = () => {
  type: typeof BOOK_GET;
};
export type bookAction = booksList | bookGet;
