import { addProduct, removeProduct } from "./actions";

const select = (state) => {
  return state.cart;
};

export const addProductThunk = (product) => {
  return (dispatch, getState) => {
    const products = select(getState());

    const updateCart = [...products, product];

    localStorage.setItem("@KenzieShop:cart", JSON.stringify(updateCart));

    dispatch(addProduct(updateCart));
  };
};

export const remProductThunk = (product) => {
  return (dispatch, getState) => {
    const products = select(getState());

    const updateCart = products.filter((item) => item.id !== product.id);

    localStorage.setItem("@KenzieShop:cart", JSON.stringify(updateCart));

    dispatch(removeProduct(updateCart));
  };
};
