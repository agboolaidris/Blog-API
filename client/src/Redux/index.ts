import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];

const Store = createStore(
  RootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
