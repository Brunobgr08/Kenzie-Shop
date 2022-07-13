import { ADD_PRODUCT, REMOVE_PRODUCT, REMOVE_ALL_PRODUCT } from "./actionTypes";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  product,
});

export const removeAllProduct = (product) => ({
  type: REMOVE_ALL_PRODUCT,
  product,
});
