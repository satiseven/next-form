import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { orderReducer } from "./orderReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

export const reducer = combineReducers({
  users: userReducer,
  books: bookReducer,
  products: productReducer,
  orders: orderReducer,
});
