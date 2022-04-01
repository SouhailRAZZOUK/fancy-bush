import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import RootReducer from "./redux/reducer";

const middlewares = applyMiddleware(thunk);
const store = createStore(
  RootReducer,
  composeWithDevTools(middlewares)
);

export default store;
