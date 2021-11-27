import { productAction } from "../../types/actions";
import { productInterface } from "../../types/models/product";
const initalState: productInterface = {
  adjective: "",
  description: "",
  id: 1,
  img: "",
  price: "",
  title: "",
};
export const productReducer = (
  state: productInterface = initalState,
  action: productAction
) => {
  return state;
};
