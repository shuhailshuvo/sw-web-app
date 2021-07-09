/**
 * Root Reducer
 */
import { combineReducers } from "redux";
import storage from "localforage";

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === "LOG_OUT") {
    state = {};
    storage.removeItem("persist:login");
  }

  return appReducer(state, action);
};

export default rootReducer;
