import { combineReducers } from "redux";
import userReducer from "./user/user.reduer";

export default combineReducers({
  user: userReducer
});
