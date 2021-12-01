import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

const cartSale = [];

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
