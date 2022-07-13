import { ADD_PRODUCT } from "./actionTypes";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});
