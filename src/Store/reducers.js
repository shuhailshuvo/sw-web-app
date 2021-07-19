import storage from "localforage";
import { combineReducers } from "redux";
// must register all reducer here
import loginReducer from "../modules/Login/reducer";

const appReducer = combineReducers({
  loginReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOG_OUT") {
    // state = {};
    storage.removeItem("persist:login");
  }

  return appReducer(state, action);
};

export default rootReducer;
