import { orderAction } from "../../types/actions";
import { orderInterface } from "../../types/models/order";
const initialState: orderInterface = {
  createdAt: new Date(),
  id: 1,
  ip: "",
  price: "",
  status: 1,
  totalPaid: "",
  userId: 1,
};
export const orderReducer = (
  state: orderInterface = initialState,
  action: orderAction
) => {
  return state;
};
