import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";

const createStore = () => {
  const store = configureStore({ reducer });
  return store;
};
// const store = configureStore({ reducer });

const wrapper = createWrapper(createStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
