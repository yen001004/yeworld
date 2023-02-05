// data
export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "yen",
      },
      content: "첫 번째 게시글 #해시태그 #리액트 #넥스트",
      Images: [
        {
          src: "https://ifh.cc/g/ovWFw1.jpg",
        },
        {
          src: "https://ifh.cc/g/NjFYq5.jpg",
        },
        {
          src: "https://ifh.cc/g/Q65ZBT.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "tori",
          },
          content: "우와 게시물이다~",
        },
        {
          User: {
            nickname: "husky",
          },
          content: "안녕하세여",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

// async action creator

// action creator
const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: "yen",
  },
  Images: [],
  Comments: [],
};

// reducer : (prevState, action) => nextState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
