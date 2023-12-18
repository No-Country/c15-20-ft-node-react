import { combineReducers } from "redux";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
  products: productSlice,
  cart: cartSlice
});

export default rootReducer;
