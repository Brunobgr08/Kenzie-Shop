import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

const saved = localStorage.getItem("@KenzieShop:cart");

const cartSale = JSON.parse(saved) || [];

const cartReducer = (state = cartSale, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return action.product;
    case REMOVE_PRODUCT:
      return action.product;

    default:
      return state;
  }
};

export default cartReducer;
