import { combineReducers } from "redux";
import Auth from "./Auth";
import Post from "./Post";

const RootReducer = combineReducers({
  Auth,
  Post,
});

export default RootReducer;
