import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import productReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";

// adicionar outros reducers aqui
const reducers = combineReducers({
  storage: productReducer,
  cart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
