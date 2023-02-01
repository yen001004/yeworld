import {
  configureStore,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";
import reducer from "../reducers";

const configureStore = () => {
  const store = createStore(reducer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
