import * as type from "../type";

const initialState = {
  posts: [],
  subPosts: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_POST:
      return {
        ...state,
        posts: action.payload,
      };
      break;

    case type.FETCH_SUBPOST:
      return {
        ...state,
        subPosts: action.payload.sub.post,
      };
      break;

    default:
      return state;
      break;
  }
};

export default Reducer;
