// data
const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

// async action creator

// action creator
const login = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

// reducer : (prevState, action) => nextState
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
  }
};

export default rootReducer;
