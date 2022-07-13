import { addProduct, removeProduct, removeAllProduct } from "./actions";

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

    const updateCart = products.filter(
      (item) => item.idCart !== product.idCart
    );

    localStorage.setItem("@KenzieShop:cart", JSON.stringify(updateCart));

    dispatch(removeProduct(updateCart));
  };
};

export const remAllProductThunk = () => {
  return (dispatch, getState) => {
    const products = select(getState());

    const updateCart = products.filter((item) => item.id === 0);

    localStorage.setItem("@KenzieShop:cart", JSON.stringify(updateCart));

    dispatch(removeAllProduct(updateCart));
  };
};
