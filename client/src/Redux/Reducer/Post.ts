import * as type from "../type";

const initialState = {
  posts: [],
  sub: {},
  topSub: [],
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
        sub: action.payload,
      };
      break;

    case type.FETCH_TOPSUB:
      return {
        ...state,
        topSub: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default Reducer;
