import { combineReducers } from "redux";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  userSlice: userReducer,
});

export default rootReducer;
