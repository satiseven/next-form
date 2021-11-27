import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { orderReducer } from "./orderReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

export const reducer = combineReducers({
  user: userReducer,
  product: productReducer,
  order: orderReducer,
  book: bookReducer,
});
