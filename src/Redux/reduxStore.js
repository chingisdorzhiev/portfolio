import { combineReducers, legacy_createStore } from "redux";
import { appReducer } from "./appReducer";

const reducers = combineReducers({
  app: appReducer,
});

const store = legacy_createStore(reducers);

export default store;
