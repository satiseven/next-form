import { booksInterface } from "./models/book";
import { orderInterface } from "./models/order";
import { productInterface } from "./models/product";
import { userInterface } from "./models/user";
export interface AppState {
  users: userInterface[];
  books: booksInterface[];
  products: productInterface[];
  orders: orderInterface[];
}
