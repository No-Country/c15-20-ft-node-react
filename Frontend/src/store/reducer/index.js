import { combineReducers } from "redux";
import userProfileReducers from "./user-profile-reducers";
import userLoggedReducers from "./authentication";

const rootReducer = combineReducers({
  userProfile: userProfileReducers,
  userLogged: userLoggedReducers,
  cartItems: cartItemsReducers,
  products: productsReducers,
});

export default rootReducer;
