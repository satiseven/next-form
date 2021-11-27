export const PRODUCT_GET = "PRODUCT_GET";
export const PRODUCTS_LIST = "PRODUCTS_LIST";
export type productsList = () => {
  type: typeof PRODUCTS_LIST;
};
export type productGet = () => {
  type: typeof PRODUCT_GET;
};
export type productAction = productsList | productGet;
