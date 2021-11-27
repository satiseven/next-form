export const ORDER_GET = "ORDER_GET";
export const ORDERS_LIST = "ORDERS_LIST";
export type ordersList = () => {
  type: typeof ORDERS_LIST;
};
export type orderGet = () => {
  type: typeof ORDER_GET;
};
export type orderAction = ordersList | orderGet;
