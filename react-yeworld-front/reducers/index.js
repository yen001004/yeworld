import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

// data

// async action creator

// action creator

// reducer : (prevState, action) => nextState
const rootReducer = combineReducers({
  // hydrate를 위해서 (ssr을 위해서) index reducer 추가
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
