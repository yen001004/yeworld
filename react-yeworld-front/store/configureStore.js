import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";

const createStore = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = configureStore({ reducer, enhancer });
  return store;
};
// const store = configureStore({ reducer });

const wrapper = createWrapper(createStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
