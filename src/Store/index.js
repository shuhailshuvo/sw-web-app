import storage from "localforage";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import createExpirationTransform from "redux-persist-transform-expire";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const expireTransform = createExpirationTransform({
  expireKey: "expiresAt",
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginReducer"],
  transforms: [expireTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger();
const enhancers = [applyMiddleware(thunk)];
enhancers.push(applyMiddleware(logger));

const store = createStore(persistedReducer, undefined, compose(...enhancers));

const persistor = persistStore(store);

export { store, persistor };
